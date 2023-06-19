<template>
    <a-form id="fileinfo" v-bind="formItemLayout" @submit="handleSubmit">
        <a-form-item label="标识">
            <span>
                {{ title }}
            </span>
        </a-form-item>

        <a-form-item label="标题" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <a-input placeholder="请输入标题" />
        </a-form-item>

        <a-form-item label="标记">
            <a-radio-group v-model="flagValue" >
                <a-radio :value="1">
                    合格
                </a-radio>
                <a-radio :value="2">
                    精品
                </a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item label="标签[多选]">
            <a-select id="tagSelect" :defaultValue="defaultTagSelected" v-decorator="[
                'select-multiple',
                {
                    rules: [
                        { required: true, message: '请选择视频标签!', type: 'array' },
                    ],
                },
            ]" mode="multiple" placeholder="请选择视频标签">
                <a-select-option v-for="(tag, index) in tags" :value="tag.Id">
                    {{ tag.Name }}
                </a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item label="是否连续">
            <a-switch :checked="isCon" :disabled="false" />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" html-type="submit">
                Submit
            </a-button>
        </a-form-item>
    </a-form>
</template>
  
<script>
export default {
    data: () => ({
        title: "视频标题",
        isCon: false,
        tags: [{
            Id: "1",
            Name: "tag1"
        }, {
            Id: "2",
            Name: "tag2"
        }],

        flagValue: 1,
        formItemLayout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        },
        defaultTagSelected: []
    }),
    methods: {
        handleSubmit(e) {
            console.log('submit');
        },
    },
    props: ['info'],
    beforeMount() {
        var tags = this.info.tags
        for (var index in tags) {
            var tag = tags[index]
            this.defaultTagSelected.push(tag.Name)
        }
    }
};
</script>

<style></style>