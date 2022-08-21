import Axios from 'axios';
import moment from 'moment-timezone';
import config from './config';
import {
    EmbedContentProps,
    HttpRequestProps,
    VimeoHttpRequestProps,
    RequestConfig,
} from './interface';
import clientCookie from 'js-cookie';
import serverCookie from 'cookie';
import { UserProps } from 'redux/slice/user';

const VIMEO_VIDEO_PARAMS = {
    name: 'contentionary video',
    description: '',
    privacy: {
        add: false,
        comments: 'nobody',
        embed: 'whitelist',
        view: 'anybody',
    },
    embed: {
        buttons: {
            share: false,
            watchlater: false,
            like: false,
            embed: false,
        },
        logos: {
            custom: {
                active: true,
                link: 'https://contentionary.com/',
                sticky: true,
                vimeo: false,
            },
        },
        title: {
            name: 'hide',
            owner: 'hide',
        },
        color: 'orange',
    },
};

const vimeoToken = process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN;

export const capitalize = (value: string): Promise<string> =>
    Promise.resolve(value.toUpperCase());

export const logout = () => {
    session.remove('user');
    session.remove('token');
    clientCookie.remove('user');
    clientCookie.remove('token');
};

export function covertSecondsToMinute(duration) {
    const minute = Math.floor(duration / 60);
    const second = duration - minute * 60;
    let time = ` ${minute} : ${second}`;
    return time;
}

export const kCount = (count) => {
    function parseNumberFloat(divider, quantity) {
        let kView = String(count / divider);
        let view = kView.split('.');
        let remainder = view[1]?.split('');
        let remainderToNumber = parseInt(remainder && remainder[0]);
        return (
            view[0] +
            (remainderToNumber > 0 ? `.${remainderToNumber}` : '') +
            quantity
        );
    }
    if (count >= 1000000000) {
        return parseNumberFloat(1000000000, 'B');
    } else if (count >= 1000000) {
        return parseNumberFloat(1000000, 'M');
    } else return parseNumberFloat(1000, 'K');
};

export const convertToFormData = (values: Record<string, any>): FormData => {
    const data = new FormData();
    for (let key in values) {
        data.append(key, values[key]);
    }

    return data;
};

export function paramsQuery(props) {
    const parmsContent = props.location.search.split('=');
    const result = parmsContent.length - 1;
    const leagueId = parmsContent[result];
    return parseInt(leagueId);
}

export const QUESTION_TYPES = {
    THEORY: 'theory',
    OBJECTIVE: 'objective',
    MULTICHOICE: 'multichoice',
    RANGE: 'range',
    BOOLEAN: 'boolean',
};

export const embedContent = async ({
    type,
    url,
    centreId,
    passMark,
    contentId,
}: EmbedContentProps) => {
    try {
        const urlToken = url.split(`${type}`);
        url = urlToken.pop();
        const examId = url.split('/').shift();
        const data = { passMark } || {};
        const res = await postContent({
            url: `/centre/${centreId}/content/${contentId}/embeded-${type}/${examId}`,
            data,
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export async function postContent({
    url,
    data,
    method = 'POST',
    baseUrl = config.API_URL,
}: HttpRequestProps) {
    try {
        const token = session.get('token');
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token ? `bearer ${token}` : '',
        };

        const result = await Axios({
            method,
            url: baseUrl + url,
            data,
            headers,
        });

        return result.data;
    } catch (err) {
        errorMessage(err);
    }
}

export async function vimeoPostContent({
    url,
    data,
    method = 'POST',
    headers = {},
}: VimeoHttpRequestProps) {
    try {
        const result = await Axios({
            method,
            url,
            data,
            headers,
        });

        return result;
    } catch (err) {}
}

export async function updateServerData({
    url,
    data,
    method = 'PATCH',
    baseUrl = config.API_URL,
}: HttpRequestProps) {
    try {
        const token = session.get('token');
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token ? `bearer ${token}` : '',
        };

        const result = await Axios({
            method,
            url: baseUrl + url,
            data,
            headers,
        });

        return result.data;
    } catch (err) {
        errorMessage(err);
    }
}
export async function deleteServerData({
    url,
    method = 'DELETE',
    baseUrl = config.API_URL,
}: HttpRequestProps) {
    try {
        const token = session.get('token');
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token ? `bearer ${token}` : '',
        };

        const result = await Axios({
            method,
            url: baseUrl + url,
            headers,
        });

        return result.data;
    } catch (err) {
        errorMessage(err);
    }
}

export async function getServerData(
    url: string,
    requestConfig?: RequestConfig,
    payload?: any
) {
    try {
        const token = requestConfig?.token || session.get('token');
        const baseUrl = requestConfig?.baseUrl || config.API_URL;
        const headers = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token ? `bearer ${token}` : '',
        };
        const { data } = await Axios({
            method: 'GET',
            url: baseUrl + url,
            headers,
            data: {
                courseIds: ['test'],
            },
        });
        return data;
    } catch (err) {
        errorMessage(err);
    }
}
export async function preview(url: string) {
    try {
        const token = session.get('token');
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
                Authorization: token ? `bearer ${token}` : '',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const urlDownload = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = urlDownload;
                link.setAttribute('download', `FileName.pdf`);

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });
    } catch (err) {
        errorMessage(err);
    }
}
export async function getAuth() {
    try {
        const { data } = await getServerData('/auth/centre-auth');
        // console.log({data, token: session.get('token')})
        session.set('ownCentres', data.ownCentres);
        session.set('pendingCentres', data.pendingCentres);
        session.set('managingCentres', data.managingCentres);
        session.set('subscribedCentres', data.subscribedCentres);
        session.set('subscribedExams', data.subscribedExams);
        session.set('joinedLeagues', data.joinedLeagues);
        session.set('token', data.token);
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}

export function errorMessage(err = void 0) {
    if (process.env.NODE_ENV !== 'production') {
        // console.dir(err.data);
    }

    // if (err.response && err.response.data.httpStatusCode === 403) {
    //     // getAuth();
    //     console.log(err)
    // }
    if (err.response.data.httpStatusCode === 402)
        window.location.href = `/insufficient-wallet${err.response.data?.userType === "Centre" ? `?centreId=${err.response.data?.userId}`:''}`;
        
    let message;

    if (err.response) {
        message = err.response.data.message;
    } else if (err.message) {
        message = err.message;
    } else {
        message = 'Something went wrong';
    }
    throw new Error(message);
}

export function formatEventDate(date) {
    date = moment(date, 'YYYY-MM-DD hh:mm:ss ')
        .tz('Africa/Lagos')
        .format('h:mm A YYYY-MM-DD');
    return date;
}
export function formatDateTimeLocal(date) {
    date = moment(date, 'YYYY-MM-DD hh:mm:ss ')
        .tz('Africa/Lagos')
        .format('YYYY-MM-DD[T]hh:mm');
    return date;
}

export async function uploadFile(e) {
    try {
        const fileType = e.target ? e.target.files[0].type : e.type;
        if (
            fileType === 'video/3gpp' ||
            fileType === 'video/mp4' ||
            fileType === 'video/mpeg' ||
            fileType === 'video/ogg'
        ) {
            const vimeoUpload = await uploadToVimeo(e);
            return vimeoUpload;
        }

        const data = convertToFormData({
            file: e.target ? e.target.files[0] : e,
        });

        const response = await postContent({
            url: `/file-upload`,
            data,
        });

        return response.data.fileUrl;
    } catch ({ message }) {}
}

export async function getVimeoUploadLink(e) {
    try {
        const videoFile = e.target ? e.target.files[0] : e;
        if (!videoFile) return 'no file found';
        const data = {
            upload: {
                approach: 'post',
                size: videoFile.size,
                redirectUrl: 'https://contentionary.com/',
            },
            ...VIMEO_VIDEO_PARAMS,
        };

        const response = await vimeoPostContent({
            url: `https://api.vimeo.com/me/videos`,
            data,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: vimeoToken ? `bearer ${vimeoToken}` : '',
            },
        });

        return response.data;
    } catch ({ message }) {}
}

export async function uploadToVimeo(e) {
    try {
        const videoFile = e.target ? e.target.files[0] : e;

        if (!videoFile || videoFile === '') return 'no file found';
        const getVimeoLink = await getVimeoUploadLink(e);
        const videoId = getVimeoLink.uri.split('/').pop();
        const { upload_link: url } = getVimeoLink.upload;
        const data = new FormData();
        data.append('file_data', videoFile);

        const uploadProgress = await vimeoPostContent({
            url,
            data,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        const fileType = e.target ? e.target.files[0].type : e.type;
        const ext = fileType.split('/').pop();

        const fileUrl = `https://player.vimeo.com/video/${videoId}.${ext}`;

        return fileUrl;
    } catch (message) {}
}

export async function upload64BaseFile(image) {
    try {
        const data = { file: image };
        const response = await postContent({
            url: `/file-upload-base64`,
            data,
        });
        return response.data.fileUrl;
    } catch ({ message }) {}
}

export function pick(keys = [], inputObject = {}) {
    const outputObject = {};
    for (let key of keys) outputObject[key] = inputObject[key];
    return outputObject;
}

export const parseJSON = (value) => {
    try {
        return JSON.parse(value);
    } catch (err) {
        return value;
    }
};

export const session = {
    set: (key, value) => {
        if (!key || !value) {
            return;
        }
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        if (process.browser) {
            localStorage.setItem(key, value);
            clientCookie.set(key, value);
        } else {
            serverCookie.set(key, value);
        }
    },

    get: (...keys) => {
        if (keys.length === 0) return null;
        let value: any;
        const key = keys.shift();
        if (process.browser) {
            value = localStorage.getItem(key);
        } else {
            if (key.headers && key.headers.cookie)
                value = serverCookie.parse(key.headers.cookie);
        }

        if (!value) {
            return null;
        }

        value = parseJSON(value);

        keys.forEach((element) => {
            value = value[element];
        });

        if (!value) return null;
        if (typeof value === 'object' && !value.token) return null;

        return value;
    },

    remove: (key) => {
        if (!process.browser) return false;
        localStorage.removeItem(key);
        return true;
    },
};

export const auth = {
    user: session.get('user'),
    isCentreSubscriber: (centreId, centreSubscribed) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        centreSubscribed = centreSubscribed || sessionUser?.subscribedCentres;
        return centreSubscribed ? centreSubscribed?.includes(centreId) : false;
    },
    isPendingSubscriber: (centreId, pendingCentres) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        pendingCentres = pendingCentres || sessionUser?.pendingCentres;
        return pendingCentres ? pendingCentres?.includes(centreId) : false;
    },
    isManager: (centreId, managingCentres) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        managingCentres = managingCentres || sessionUser?.managingCentres;
        return managingCentres ? managingCentres?.includes(centreId) : false;
    },
    isOwner: (centreId, ownCentres) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        ownCentres = ownCentres || sessionUser?.ownCentres;
        return ownCentres ? ownCentres?.includes(centreId) : false;
    },
    hasJoinedLeague: (leagueId, joinedLeagues) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        joinedLeagues = joinedLeagues || sessionUser?.joinedLeagues;
        return joinedLeagues ? joinedLeagues?.includes(leagueId) : false;
    },
    isExamSubscriber: (examId, subscribedExams) => {
        const sessionUser = session.get('user') as unknown as UserProps;
        subscribedExams = subscribedExams || sessionUser?.subscribedExams;
        return subscribedExams ? subscribedExams?.includes(examId) : false;
    },
};

export const Auth = (user?: UserProps) => {
    user = user || (session.get('user') as unknown as UserProps);
    user = parseJSON(user);
    return {
        isLoggedIn: Boolean(user),
        isOwner: (centreId: string) =>
            user ? user?.ownCentres?.includes(centreId) : false,
        isManager: (centreId: string) => {
            return user
                ? user?.managingCentres?.includes(centreId) ||
                      user?.ownCentres?.includes(centreId)
                : false;
        },
        isCentreSubscriber: (centreId) =>
            user ? user?.subscribedCentres?.includes(centreId) : false,
        isPendingSubscriber: (centreId) =>
            user ? user?.pendingCentres?.includes(centreId) : false,
        isExamSubscriber: (examId) =>
            user ? user?.subscribedExams?.includes(examId) : false,
        isCourseSubscriber: (courseId) =>
            user ? user?.subscribedCourses?.includes(courseId) : false,
        isPublicationSubscriber: (publicationId) =>
            user ? user?.subscribedPublications?.includes(publicationId) : false,
        hasJoinedLeague: (leagueId) =>
            user ? user?.joinedLeagues?.includes(leagueId) : false,
    };
};
