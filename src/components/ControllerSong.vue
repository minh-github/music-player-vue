<template>
<div>
    <div class="flex p-5 border-b">
        <img class='w-20 h-20 object-cover' alt='User avatar' :src='song.thumb'>
        <div class="flex flex-col px-2 w-full">
            <span class="text-xs text-gray-700 uppercase font-medium ">
                {{ song.name }}
            </span>
            <span class="text-sm text-red-500 capitalize font-semibold pt-1">
                {{ song.description }}
            </span>
            <span class="text-xs text-gray-500 uppercase font-medium ">
                <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name }}{{ index < song.artists.length - 1 ? ', ' : '' }}</span>
            </span>
            <div class="flex justify-end">
                <img class="w-5 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" />
                <img class="w-5 cursor-pointer mx-2" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" />
                <img class="w-5 cursor-pointer" src="https://www.iconpacks.net/icons/2/free-favourite-icon-2765-thumb.png" />
            </div>
        </div>
    </div>
    <div class="flex flex-col sm:flex-row items-center p-5">
        <audio id="nowSong" :src="song.music_path"></audio>
        <div class="flex items-center">
            <div class="flex space-x-3 p-2">
                <button class="focus:outline-none">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="19 20 9 12 19 4 19 20"></polygon>
                        <line x1="5" y1="19" x2="5" y2="5"></line>
                    </svg>
                </button>
                <button @click="playAudio" class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-red-400 focus:outline-none">
                    <div v-if="isPlay == true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" class="fill-[#ef4444]" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                            <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                        </svg>
                    </div>
                    <div v-if="isPlay == false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" class="fill-[#ef4444]" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                            <path d="M7 6v12l10-6z"></path>
                        </svg>
                    </div>
                </button>
                <button class="focus:outline-none">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 4 15 12 5 20 5 4"></polygon>
                        <line x1="19" y1="5" x2="19" y2="19"></line>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full">
            <input v-model="valueRange" min="0" max="100" type="range" @change="setCurrent()" class="timeLine h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-red-400" />
        </div>
        <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
            <span class="text-xs text-gray-700 uppercase font-medium pl-2">
                {{ current + '/' + duration }}
            </span>
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
            isPlay: false,
            duration: '0:00',
            current: '0:00',
            valueRange: 0,
            music: '',
            timeLine: null
        }
    },
    async mounted() {
        let response = await axios.get('/get-song/6').then((response) => { //thay 1 cái url link bài hát nào đó trên local
            return response.data.song
        }).catch(error => {
            console.error(error)
        });
        this.song = response;
        let audio = new Audio(this.song.music_path);
        audio.addEventListener('loadedmetadata', () => {
            this.duration = this.formmat(audio.duration);
            this.timeLine = document.querySelector('.timeLine');
            this.music = audio;
        });
        audio.load();
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
            this.timer = setInterval(() => {
                this.current = this.formmat(this.music.currentTime);
                this.valueRange = (this.music.currentTime / this.music.duration) * 100;
            }, 1000);
        },

        stopTimer() {
            clearInterval(this.timer);
        },

        setCurrent() {
            let current = (this.timeLine.value / 100) * this.music.duration;
            this.valueRange = (current / this.music.duration) * 100;
            this.music.currentTime = this.valueRange
            console.log(current);
        },
    },
    watch: {
        isPlay(newValue) {
            if (newValue)
                this.startTimer()
            else
                this.stopTimer()
        }
    }
};
</script>
