import Slider from '../shared/carousel';
import { useEffect, useState } from 'react';
import { getServerData } from '../../utils';
import Image from '../shared/image';

export default function PublicExams({ id, centreId }) {
    const [proctor, setProctor] = useState([]);
    useEffect(() => {
        async function results() {
            try {
                const { data } = await getServerData(
                    `/centre/${centreId}/protor-content/exam-answer/${id}`
                );
                setProctor(data.contents);
            } catch ({ message }) {
                console.log(message);
            }
        }
        results();
    }, []);
    return (
        <Slider
            slidesToScroll={1}
            showArrows
            infinite={proctor?.length > 1 ? true : false}
            className={`pubExamSlider `}
            speed={1000}
            centerPadding={10}
            centerMode
            slidesToShow={1}
            responsive={[
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
        >
            {proctor?.map((image, index) => (
                <Image
                    src={image}
                    alt="proctor"
                    key={index}
                    height="300"
                    width="300"
                />
            ))}
        </Slider>
    );
}
