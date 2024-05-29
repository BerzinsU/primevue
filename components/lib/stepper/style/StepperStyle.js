import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${dt('stepper.item.gap')};
    padding: ${dt('stepper.item.padding')};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')}, box-shadow ${dt(
    'stepper.transition.duration'
)};
    border-radius: ${dt('stepper.item.header.border.radius')};
    outline-color: transparent;
    background: transparent;
    padding: ${dt('stepper.item.header.padding')};
    gap: ${dt('stepper.item.header.gap')};
}

.p-step-header:focus-visible {
    box-shadow: ${dt('stepper.item.header.focus.ring.shadow')};
    outline: ${dt('stepper.item.header.focus.ring.width')} ${dt('stepper.item.header.focus.ring.style')} ${dt('stepper.item.header.focus.ring.color')};
    outline-offset: ${dt('stepper.item.header.focus.ring.offset')};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${dt('stepper.item.title.color')};
    font-weight: ${dt('stepper.item.title.font.weight')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
    'stepper.transition.duration'
)};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dt('stepper.item.number.color')};
    border: 2px solid ${dt('stepper.item.number.border.color')};
    background: ${dt('stepper.item.number.background')};
    min-width: ${dt('stepper.item.number.size')};
    height: ${dt('stepper.item.number.size')};
    line-height: ${dt('stepper.item.number.size')};
    font-size: ${dt('stepper.item.number.font.size')};
    z-index: 1;
    border-radius: ${dt('stepper.item.number.border.radius')};
    position: relative;
    font-weight: ${dt('stepper.item.number.font.weight')};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt('stepper.item.number.border.radius')};
    box-shadow: ${dt('stepper.item.number.shadow')};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${dt('stepper.item.number.active.background')};
    border-color: ${dt('stepper.item.number.active.border.color')};
    color: ${dt('stepper.item.number.active.color')};
}

.p-step-active .p-step-title {
    color: ${dt('stepper.item.title.active.color')};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${dt('stepper.separator.background')};
    width: 100%;
    height: ${dt('stepper.separator.size')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
    'stepper.transition.duration'
)};
}

.p-steppanels {
    padding: ${dt('stepper.panel.content.orientation.horizontal.padding')};
}

.p-steppanel {
    background: ${dt('stepper.panel.content.background')};
    color: ${dt('stepper.panel.content.color')};
}
`;

// const x = `
// .p-stepper-item {
//     position: relative;
//     display: flex;
//     flex: 1 1 auto;
//     align-items: center;
//     gap: ${dt('stepper.item.gap')};
//     padding: ${dt('stepper.item.padding')};
// }

// .p-stepper-item:last-of-type {
//     flex: initial;
// }

// .p-stepper-item-header {
//     border: 0 none;
//     display: inline-flex;
//     align-items: center;
//     text-decoration: none;
//     cursor: pointer;
//     transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')}, box-shadow ${dt(
//     'stepper.transition.duration'
// )};
//     border-radius: ${dt('stepper.item.header.border.radius')};
//     outline-color: transparent;
//     background: transparent;
//     padding: ${dt('stepper.item.header.padding')};
//     gap: ${dt('stepper.item.header.gap')};
// }

// .p-stepper-item-header:focus-visible {
//     box-shadow: ${dt('stepper.item.header.focus.ring.shadow')};
//     outline: ${dt('stepper.item.header.focus.ring.width')} ${dt('stepper.item.header.focus.ring.style')} ${dt('stepper.item.header.focus.ring.color')};
//     outline-offset: ${dt('stepper.item.header.focus.ring.offset')};
// }

// .p-stepper.p-stepper-readonly .p-stepper-item {
//     cursor: auto;
// }

// .p-stepper-item-title {
//     display: block;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     max-width: 100%;
//     color: ${dt('stepper.item.title.color')};
//     font-weight: ${dt('stepper.item.title.font.weight')};
//     transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
//     'stepper.transition.duration'
// )};
// }

// .p-stepper-item-number {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: ${dt('stepper.item.number.color')};
//     border: 2px solid ${dt('stepper.item.number.border.color')};
//     background: ${dt('stepper.item.number.background')};
//     min-width: ${dt('stepper.item.number.size')};
//     height: ${dt('stepper.item.number.size')};
//     line-height: ${dt('stepper.item.number.size')};
//     font-size: ${dt('stepper.item.number.font.size')};
//     z-index: 1;
//     border-radius: ${dt('stepper.item.number.border.radius')};
//     position: relative;
//     font-weight: ${dt('stepper.item.number.font.weight')};
// }

// .p-stepper-item-number::after {
//     content: " ";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: ${dt('stepper.item.number.border.radius')};
//     box-shadow: ${dt('stepper.item.number.shadow')};
// }

// .p-stepper-item-active .p-stepper-item-header {
//     cursor: default;
// }

// .p-stepper-item-active .p-stepper-item-number {
//     background: ${dt('stepper.item.number.active.background')};
//     border-color: ${dt('stepper.item.number.active.border.color')};
//     color: ${dt('stepper.item.number.active.color')};
// }

// .p-stepper-item-active .p-stepper-item-title {
//     color: ${dt('stepper.item.title.active.color')};
// }

// .p-stepper-item:not(.p-disabled):focus-visible {
//     outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
//     outline-offset: ${dt('focus.ring.offset')};
// }

// .p-stepper-item:has(~ .p-stepper-item-active) .p-stepper-separator {
//     background: ${dt('stepper.separator.active.background')};
// }

// .p-stepper-separator {
//     flex: 1 1 0;
//     background: ${dt('stepper.separator.background')};
//     width: 100%;
//     height: ${dt('stepper.separator.size')};
//     transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
//     'stepper.transition.duration'
// )};
// }

// .p-stepper-panels {
//     padding: ${dt('stepper.panel.content.orientation.horizontal.padding')};
// }

// .p-stepper-panel-content {
//     background: ${dt('stepper.panel.content.background')};
//     color: ${dt('stepper.panel.content.color')};
// }

// .p-stepper-vertical .p-stepper-list {
//     flex-direction: column;
// }

// .p-stepper-vertical {
//     display: flex;
//     flex-direction: column;
// }

// .p-stepper-vertical .p-stepper-panel-content-container {
//     display: flex;
//     flex: 1 1 auto;
// }

// .p-stepper-vertical .p-stepper-panel {
//     display: flex;
//     flex-direction: column;
//     flex: initial;
// }

// .p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
//     flex: 1 1 auto;
// }

// .p-stepper-vertical .p-stepper-panel .p-stepper-item {
//     flex: initial;
// }

// .p-stepper-vertical .p-stepper-panel .p-stepper-panel-content {
//     width: 100%;
//     padding: ${dt('stepper.panel.content.orientation.vertical.padding')};
// }

// .p-stepper-vertical .p-stepper-panel .p-stepper-separator {
//     flex: 0 0 auto;
//     width: ${dt('stepper.separator.size')};
//     height: auto;
//     margin: ${dt('stepper.separator.orientation.vertical.margin')};
//     position: relative;
//     left: calc(-1 * ${dt('stepper.separator.size')} / 2);
// }

// .p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
//     background: ${dt('stepper.connector.active.background')};
// }

// .p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-panel-content {
//     padding: ${dt('stepper.panel.content.orientation.vertical.last.padding')};
// }`;

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-stepper-horizontal': props.orientation === 'horizontal',
            'p-stepper-vertical': props.orientation === 'vertical',
            'p-readonly': props.linear
        }
    ],
    list: 'p-stepper-list',
    stepper: {
        item: ({ instance, step, index }) => [
            'p-stepper-item',
            {
                'p-stepper-item-active': instance.isStepActive(index),
                'p-disabled': instance.isItemDisabled(index)
            }
        ],
        itemHeader: 'p-stepper-item-header',
        itemNumber: 'p-stepper-item-number',
        itemTitle: 'p-stepper-item-title',
        panelContentContainer: 'p-stepper-panel-content-container',
        panelContent: 'p-stepper-panel-content'
    },
    separator: 'p-stepper-separator',
    panels: 'p-stepper-panels',
    panel: ({ instance, props, index }) => [
        'p-stepper-panel',
        {
            'p-stepper-panel-active': props.orientation === 'vertical' && instance.isStepActive(index)
        }
    ]
};

export default BaseStyle.extend({
    name: 'stepper',
    theme,
    classes
});
