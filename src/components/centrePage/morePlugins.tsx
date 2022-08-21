import GeneraalWrapper from './generalWrapper';
import Body from './body/yourPlugins';

const style = {
    width: '87%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '140px',
};

const pluging = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 28,
    color: '#333333',
    marginBottom: 20,
};

export default function CentreSingleView({ centre, user }) {

    return (
        <GeneraalWrapper centre={centre} user={user}>
            <div style={style}>
                <div style={pluging}>YOUR CENTRE’S PLUGINS</div>
                <Body {...centre} numbersToShow={6} />
            </div>
        </GeneraalWrapper>
    );
}
