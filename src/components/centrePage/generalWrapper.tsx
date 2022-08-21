import SideNav from './sidenav';
import Header from './header/index';
import { useState } from 'react';
import Toast from '../shared/toast';
import { HideMdDown } from '../../components/hide';
interface Props {
    centre: any;
    user: any;
    children: JSX.Element;
}
export default function CentreSingleView({ centre, user, children }: Props) {
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                <HideMdDown>
                    <>
                        <SideNav
                            centre={centre}
                            setMessage={setMessage}
                            user={user}
                        />
                    </>
                </HideMdDown>
                {show && (
                    <div style={{ position: 'absolute', zIndex: 1 }}>
                        <SideNav
                            centre={centre}
                            setMessage={setMessage}
                            user={user}
                        />
                    </div>
                )}
                <div style={{ maxWidth: 1240, width: '100%', marginLeft: 278 }}>
                    <Header
                        name={centre.name}
                        logo={centre.logo}
                        id={centre.id}
                        isPrivate={centre.isPrivate}
                        setMessage={setMessage}
                        slug={centre.slug}
                        setShow={setShow}
                    />
                    {children}
                </div>
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
