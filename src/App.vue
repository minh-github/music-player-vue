<template>
<div class="w-full h-screen">
    <div class='flex h-full shadow-md rounded-lg overflow-hidden mx-auto'>
        <div class="flex flex-col w-full h-full">
            <div class="flex h-full w-full pb-[95px] gap-x-3 px-3 pt-10">
                <div class="w-1/3 h-full flex flex-col gap-y-3">
                    <div class="text-white text-sm font-semibold p-5 flex flex-col gap-y-5 bg-[#121212] w-full bg rounded-md">
                        <div class="flex gap-x-3 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                            <div>Home</div>
                        </div>
                        <div class="flex gap-x-3 text-[#999999] items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                </svg>
                            </div>
                            <div>Search</div>
                        </div>
                    </div>
                    <div class="flex h-full w-full flex-col gap-y-3 p-5 bg-[#121212] rounded-md">
                        <div class="w-full flex text-sm font-semibold justify-between items-center">
                            <div class="flex capitalize gap-x-3 text-[#999999] items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                    <path d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z"></path>
                                </svg>
                                <div>Your libray</div>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex mt-3 text-xs font-semibold text-[#999999] justify-between items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                                </svg>
                            </div>
                            <div class="flex items-center gap-x-1">
                                <div>
                                    Recents
                                </div>
                                <svg class="scale-[.4] translate-y-[1.5px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #999999;transform: ;msFilter:;">
                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="overflow-scroll">
                            <div @click="playSong(song.id)" v-for="song in songs" :key="song.id" class="flex py-2 cursor-pointer hover:shadow-md ">
                                <img class='w-10 h-10 object-cover rounded-lg mr-3' alt='User avatar' :src='song.thumb'>
                                <div class="flex flex-col w-full">
                                    <span class="text-sm text-red-500 capitalize font-semibold pt-1">
                                        {{ song.name }}
                                    </span>
                                    <span class="text-xs text-gray-500 font-medium ">
                                        <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name }}{{ index < song.artists.length - 1 ? ', ' : '' }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex h-full w-2/3 flex-col p-5 bg-gradient-to-br from-[#222222] to-[#121212] mb-[95px] rounded-md">
                    <div class="fixed flex top-10 right-3 left-1/3 p-5 w-2/3 h-9 bg-transparent">
                        <!-- <div class="flex text-xs w-full justify-end px-3 py-2 gap-x-3 font-semibold capitalize items-center text-white">
                            <div>Minh Phạm</div>
                            <div>
                                <img class="w-8 h-8 object-cover rounded-full border-2 border-[#999999] p-[2px]" :src='song.thumb' alt="">
                            </div>
                        </div> -->
                        <div @click="login()" class="flex text-xs w-full justify-end px-3 py-2 gap-x-3 font-semibold capitalize items-center text-white cursor-pointer">
                            Đăng nhập
                        </div>
                    </div>
                    <div class="pb-1 flex justify-between items-center mb-2 mt-9">
                        <span class=" text-base font-semibold uppercase text-white"> Danh sách bài hát</span>
                    </div>
                    <div class="overflow-scroll h-[50vh]">
                        <div @click="playSong(song.id)" v-for="song in songs" :key="song.id" class="flex py-2 cursor-pointer hover:shadow-md items-center relative" x-data="{openModal: false}">
                            <img class='w-10 h-10 object-cover rounded-lg mr-3' alt='User avatar' :src='song.thumb'>
                            <div class="flex flex-col w-full">
                                <span class="text-sm text-red-500 capitalize font-semibold pt-1">
                                    {{ song.name }}
                                </span>
                                <span class="text-xs text-gray-500 font-medium ">
                                    <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name }}{{ index < song.artists.length - 1 ? ', ' : '' }}</span>
                                </span>
                            </div>
                            <div x-on:click="openModal=!openModal">
                                <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#999999] hover:fill-white transition" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </div>
                            <div x-show="openModal" x-on:click="openModal=false" @click="addToPlayList(song.id)" class="w-[170px] h-fit text-xs font-semibold text-[#eaeaea] hover:bg-[hsla(0,0%,100%,.1)] flex py-3 px-2 justify-center bg-[#282828] right-7 top-6 rounded-md absolute">
                                <div>add to playlist</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex fixed z-20 h-[90px] bg-black bottom-0 w-full flex-col sm:flex-row items-center">
                <audio id="nowSong" :src="song.music_path"></audio>
                <div class="flex items-center p-5 border-b w-1/3">
                    <img class='w-14 h-14 object-cover rounded-md' alt='User avatar' :src='song.thumb'>
                    <div class="flex flex-col px-2 w-full">
                        <span class="text-xs text-white uppercase font-medium ">
                            {{ song.name }}
                        </span>
                        <span class="text-sm text-red-500 capitalize font-semibold pt-1">
                            {{ song.description }}
                        </span>
                        <span class="text-[12px] text-gray-400 font-medium ">
                            <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name }}{{ index < song.artists.length - 1 ? ', ' : '' }}</span>
                        </span>
                    </div>
                </div>
                <div class="w-1/3 flex flex-col items-center">
                    <div class="flex items-center">
                        <div class="flex space-x-3 p-2">
                            <button class="focus:outline-none">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                    <line x1="5" y1="19" x2="5" y2="5"></line>
                                </svg>
                            </button>
                            <button @click="playAudio" class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-white focus:outline-none">
                                <div v-if="isPlay == true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" class="fill-[#fff]" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                                        <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                                    </svg>
                                </div>
                                <div v-if="isPlay == false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" class="fill-[#fff]" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                                        <path d="M7 6v12l10-6z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button class="focus:outline-none">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                    <line x1="19" y1="5" x2="19" y2="19"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex items-center gap-x-4 text-white text-xs">
                        <span>{{ current }}</span>
                        <input v-model="valueRange" min="0" max="100" type="range" @mousedown="()=>{this.isPlay = false}" @mouseup="()=>{this.isPlay = true}" @change="setCurrent()" class="timeLine h-1 overflow-hidden w-full cursor-pointer appearance-none rounded-lg bg-[#4d4d4d]" />
                        <span>{{ duration }}</span>
                    </div>
                </div>
                <div class="flex w-1/3 text-white">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            song: '',
            songs: [],
            isPlay: false,
            duration: '0:00',
            current: '0:00',
            valueRange: 0,
            music: '',
            timeLine: null,
            songdDefault: 1
        }
    },
    async mounted() {
        this.songs = await axios.get('public/api/get-songs').then((response) => {
            return response.data.songs
        }).catch(error => {
            console.error(error)
        });
        this.playSong(this.songdDefault)
    },
    methods: {
        playAudio() {
            if (!this.isPlay) {
                this.music.play();
                this.isPlay = true;
            } else {
                this.music.pause();
                this.isPlay = false;
            }
        },
        formmat(sec) {
            let minutes = Math.floor(sec / 60);
            let seconds = Math.floor(sec % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },

        startTimer() {
            this.music.play()
            this.timer = setInterval(() => {
                this.current = this.formmat(this.music.currentTime);
                this.valueRange = (this.music.currentTime / this.music.duration) * 100;
            }, 500);
        },

        stopTimer() {
            clearInterval(this.timer);
            this.music.pause()
        },

        setCurrent() {
            this.isPlay = false
            let current = (this.timeLine.value / 100) * this.music.duration;
            this.valueRange = (current / this.music.duration) * 100;
            this.music.currentTime = current
            this.isPlay = true
        },
        async playSong(id) {
            if (this.isPlay) {
                this.isPlay = false
                this.music.pause()
            }
            this.song = await axios.get('public/api/get-song/' + id).then((response) => {
                return response.data.song
            }).catch(error => {
                console.error(error)
            });
            let audio = new Audio(this.song.music_path);
            audio.addEventListener('loadedmetadata', () => {
                this.duration = this.formmat(audio.duration);
                this.timeLine = document.querySelector('.timeLine');
                this.music = audio;
                this.music.currentTime = 0;
                this.isPlay = false
                this.valueRange = 0;
            });
            audio.load();
        },
        addToPlayList(id) {
            console.log(id);
            axios.get('public/api/add-song-playlist/' + id).then((response) => {
                return response.data.song
            }).catch(error => {
                console.error(error)
            });
        },
        login() {
            axios.get('public/api/auth/register/').then((response) => {
                return response
            }).catch(error => {
                console.error(error)
            });

        }
    },
    watch: {
        isPlay(newValue) {
            if (newValue)
                this.startTimer()
            else
                this.stopTimer()
        }
    },
    components: {
        
    }
};
</script>
