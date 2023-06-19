<template>
    <div>
        <a-modal v-model:visible="modalVisible" title="Title" @ok="handleOk">
            <fileinfo :info="selectFile"></fileinfo>
        </a-modal>

        <div>
            <a-button type="primary" @click="changeFiles">换一批</a-button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a-button type="primary" @click="changeFiles">精品</a-button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a-button type="primary" @click="changeFiles">合格</a-button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a-button type="primary" @click="changeFiles">不合格</a-button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <a-button type="primary" @click="updateInfo">修改信息</a-button>
        </div>

        <div>
            <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(video, index) in ctnList" :key="index">
                    <video class="video" style="margin: auto;" x5-video-player-type="h5" x-webkit-airplay="true" webkit-playsinline="true" loop
                        autoplay muted controls :id="'video' + index">
                        <source :src="video.src" type="video/mp4">
                    </video>
                </swiper-slide>
            </swiper>
        </div>

    </div>
</template>

<script>
import fileinfo from './fileinfo.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import api from './api'
import { Pagination, Navigation } from 'swiper';

export default {
    data() {
        return {
            modalVisible: false,
            ctnList: [],
            selectFile: {
                id: 1,
                title: "",
                tags: [{
                    Id: 1,
                    Name: "tag1"
                }]
            },
            showfileinfo: false
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        fileinfo,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    methods: {
        openPictureInPicture(index) {
            let video = document.getElementById("video" + index);
            video.requestPictureInPicture();
        },
        changeFiles() {
            this.getReviewFiles()
        },
        updateInfo() {
            this.modalVisible = true;
        },
        handleOk() {
            this.modalVisible = false;
        },
        getReviewFiles() {
            api.apiGetReviewFiles().then((res) => {
                console.log(res)
                var infos = res.Infos
                for (var item in infos) {
                    var info = infos[item]
                    var ctn = {
                        src: "http://localhost:9999/api/raw/" + info.Id + ".mp4",
                        tags: info.Tags
                    }
                    this.ctnList.push(ctn)
                }
            })
        }
    },
    mounted() {
        this.getReviewFiles()
    }
};
</script>

<style scoped></style>
