<template>
    <div class="review-page">
        <div class="review-header" @click="updateInfo">
            <div class="title">视频标题</div>
            <a-tag v-for="i in 8" color="pink" v-text="'text' + i"></a-tag>
            <a-button class="change-btn" type="primary" @click.stop="changeFiles">换一批</a-button>
        </div>

        <swiper :pagination="{ type: 'fraction' }" :navigation="true" :modules="modules" @navigation-next="next" @slideChange="getCurrentSlide">
            class="review-content">
            <swiper-slide v-for="(video, index) in ctnList" :key="index">
                <video ref="videoElement" class="review-video" style="margin: auto;" x5-video-player-type="h5" x-webkit-airplay="true"
                    webkit-playsinline="true" loop autoplay :key="index"
                    @click="e => play(e.target, index)">
                    <source :src="video.Src" type="video/mp4">
                </video>
            </swiper-slide>
        </swiper>

        <div class="review-footer">
            <a-button type="primary" @click="changeFiles">精品</a-button>
            <a-button type="primary" @click="changeFiles">合格</a-button>
            <a-button type="primary" @click="changeFiles">删除</a-button>
        </div>
    </div>

    <a-modal v-model:visible="modalVisible" title="Title" @ok="handleOk">
        <fileinfo :info="currentInfo"></fileinfo>
    </a-modal>
</template>

<script>
import fileinfo from './fileinfo.vue';
import api from './api'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';


export default {
    data() {
        return {
            modalVisible: false,
            ctnList: [{
                Id: 1,
                Src: "http://localhost:9999/api/raw/1.mp4",
                Tag: {
                    Id : 1,
                    Name: "tag1"
                }
            }, {
                Id: 2,
                Src: "http://localhost:9999/api/raw/2.mp4"
            }],
            currentInfo: null,
            showfileinfo: false,
            currentIndex : 0
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
        getCurrentSlide(e) {  
            this.currentInfo = this.ctnList[e.activeIndex]
            console.log("currentInfo:", this.currentInfo)
        },
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
            /*api.apiGetReviewFiles().then((res) => {
                console.log(res)
                var infos = res.Infos
                for (var index in infos) {
                    var info = infos[index]
                    var ctn = {
                        Id: info.Id,
                        Title: info.Title,
                        Src: "http://localhost:9999/api/raw/" + info.Id + ".mp4",
                        Tags: info.Tags
                    }
                    this.ctnList.push(ctn)
                }
            })*/
        },
        next(e) {           
        },
        play(ele, index) {
            if (ele.paused)
                ele.play();
            else
                ele.pause();
        },
    },
    mounted() {
        this.getReviewFiles()
        this.currentInfo = this.ctnList[0]
    }
};
</script>

<style scoped>
.review-page {
    height: 100%;
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    position: relative;
    max-width: 1024px; /* 设置容器的最大宽度 */
}

.review-header {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;
}

.title {
    color: white;
    font-size: 1.2rem;
}

.change-btn {
    position: absolute;
    right: 0;
    top: 0;
}

.review-content {
    /* flex-grow: 1;
    margin: 0; */
    height: 100%;
    width: 100%;
}

.review-video {
    height: 100%;
    width: 100%;
}

.review-footer {
    display: flex;
    justify-content: stretch;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}

.review-footer>button {
    flex-grow: 1;
}

.review-footer>button+button {
    margin-left: 2px;
}
</style>
