import m from 'mithril';

export default {
    view(ctrl, props, children) {
        const {dispatch, getState} = props;
        const {message} = getState();

        return (
            <div class="hello">
                Hello {message}!
            </div>
        );
    }
};
