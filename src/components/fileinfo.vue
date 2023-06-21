<template>
    <a-form id="fileinfo" v-bind="formItemLayout">
        <a-form-item label="标识">
            <span>
                {{ info.Id }}
            </span>
        </a-form-item>

        <a-form-item label="标题" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <a-input placeholder="请输入标题" :value="info.Title" />
        </a-form-item>

        <a-form-item label="标记">
            <a-radio-group v-model="flagValue">
                <a-radio :value="1">合格</a-radio>
                <a-radio :value="2">精品</a-radio>
            </a-radio-group>
        </a-form-item>

        <a-form-item label="标签[多选]">
            <a-select :value="defaultSelectedTagNames" @update:value="defaultSelectedTagNames = $event" mode="multiple"
                style="width: 100%" placeholder="请选择视频标签">
                <a-select-option v-for="(tag, index) in info.Tags" :value="tag.Id">
                    {{ tag.Name }}
                </a-select-option> />
            </a-select>
        </a-form-item>

        <a-form-item label="是否连续">
            <a-switch :checked="isCon" :disabled="false" />
        </a-form-item>

        <a-form-item label="  ">
            <a-button type="primary" @click="handleSubmit">修改</a-button>
        </a-form-item>
    </a-form>
</template>
  
<script>
export default {
    data: () => ({
        title: "视频标题",
        isCon: false,
        flagValue: 1,
        formItemLayout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        },
    }),
    methods: {
        handleSubmit(e) {
            console.log('submit');
        },
    },
    props: ['info', 'defaultSelectedTagNames'],
};

</script>

<style></style>