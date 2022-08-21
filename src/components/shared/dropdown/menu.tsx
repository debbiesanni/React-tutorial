// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks';

interface MenuItem {
    title: string | JSX.Element | any;
    onClick?: Function;
}

interface Props {
    menu: MenuItem[];
    children: string | JSX.Element;
    menuStyle?: string;
    menuItemClass?: string;
}

const DropDownMenu = ({ menu, children, menuStyle, menuItemClass }: Props) => {
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoMenu',
    });

    return (
        <>
            <div {...bindTrigger(popupState)}>{children}</div>
            <Menu {...bindMenu(popupState)} className={menuStyle}>
                {menu.map(({ title, onClick }) => (
                    <MenuItem
                       className={menuItemClass}
                        onClick={() => {
                            popupState.close();
                            onClick();
                        }}
                    >
                        {title}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default DropDownMenu;
