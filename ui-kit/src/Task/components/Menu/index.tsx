import { MenuProps, Menu as MenuList } from "antd";

export function Menu() {
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: "",
            children: [
                {
                    key: 'g1',
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: '1', label: 'Option 1' },
                        { key: '2', label: 'Option 2' },
                    ],
                },
                {
                    key: 'g2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: '3', label: 'Option 3' },
                        { key: '4', label: 'Option 4' },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: "",
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '7', label: 'Option 7' },
                        { key: '8', label: 'Option 8' },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        },


    ];
    return (
        <MenuList items={items}/>
    )
}