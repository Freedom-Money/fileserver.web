<template>
    <h3>文件管理</h3>
    <div>
        <a-select show-search placeholder="Select a person" option-filter-prop="children" style="width: 200px"
            :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
            <a-select-option v-for="(value, index) in options" :value="value.id">{{value.name}}</a-select-option>
        </a-select>
    </div>

    <div>
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" />
    </div>
</template>
<script>
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export default {
    data() {
        return {
            data,
            columns,
            selectedRowKeys: [], // Check here to configure the default column
            options: [
                {
                    id: "1",
                    name:"author1"
                },
                {
                    id: "2",
                    name:"author2"
                }
            ]
        };
    },
    computed: {
        rowSelection() {
            const { selectedRowKeys } = this;
            return {
                selectedRowKeys,
                onChange: this.onSelectChange,
                hideDefaultSelections: true,
                selections: [
                    {
                        key: 'all-data',
                        text: 'Select All Data',
                        onSelect: () => {
                            this.selectedRowKeys = [...Array(46).keys()]; // 0...45
                        },
                    },
                    {
                        key: 'odd',
                        text: 'Select Odd Row',
                        onSelect: changableRowKeys => {
                            let newSelectedRowKeys = [];
                            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                if (index % 2 !== 0) {
                                    return false;
                                }
                                return true;
                            });
                            this.selectedRowKeys = newSelectedRowKeys;
                        },
                    },
                    {
                        key: 'even',
                        text: 'Select Even Row',
                        onSelect: changableRowKeys => {
                            let newSelectedRowKeys = [];
                            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                                if (index % 2 !== 0) {
                                    return true;
                                }
                                return false;
                            });
                            this.selectedRowKeys = newSelectedRowKeys;
                        },
                    },
                ],
                onSelection: this.onSelection,
            };
        },
    },
    methods: {
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        handleBlur() {
            console.log('blur');
        },
        handleFocus() {
            console.log('focus');
        },
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        }
    },
};
</script>
  
  
  