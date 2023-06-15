<template>
<div class="pb-[148px] h-full">
    <div class="h-[180px] bg-transparent relative -m-5 flex justify-start items-center mb-2">
        <div v-if="imageThumb == ''">
            <div class="bg-gradient-to-b from-[#233a23] z-10 to-[#131e13] absolute h-[120%] w-[150%] -left-10 -top-10 blur-lg"></div>
        </div>
        <div v-if="imageThumb != ''">
            <div :style="'background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('+ imageThumb +')'" class="linerColor blur-xl absolute h-[120%] w-[150%] -left-10 -top-10"></div>
        </div>
        <div class="flex p-5 space-x-5 items-end z-40">
            <div :class="EditPhoto == true ? 'bg-white opacity-30 h-[120px] w-[120px] relative shadow-lg shadow-black rounded-sm flex justify-center items-center cursor-pointer' : 'bg-transparent h-[120px] w-[120px] relative shadow-lg shadow-black rounded-sm flex justify-center items-center cursor-pointer'" v-on:mouseover="EditPhoto=true" v-on:mouseleave="EditPhoto=false">
                <form>
                    <div v-if="imageThumb == ''">
                        <svg class="absolute h-full w-full top-0 left-0 text-white scale-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>
                        <label for="imageChange" v-show="EditPhoto" class="absolute h-full w-full cursor-pointer bg-transparent">
                            <svg class="h-8 w-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#363636]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </label>
                        <input @change="updatePlaylist" type="file" hidden id="imageChange">
                    </div>
                    <div v-if="imageThumb != ''">
                        <img class=" absolute top-0 left-0 object-cover h-full w-full" :src='imageThumb' alt="">
                        <label for="imageChange" v-show="EditPhoto" class="absolute h-full w-full cursor-pointer bg-transparent">
                            <svg class="h-8 w-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </label>
                        <input @change="updatePlaylist" type="file" hidden id="imageChange">
                    </div>
                </form>
            </div>
            <div x-data="{EditName: false}">
                <div class="flex flex-col space-y-2 justify-betwee" x-on:mouseover="EditName=true" x-on:mouseleave="EditName=false">
                    <div class="text-white text-xs font-semibold">Playlist</div>
                    <span class="text-3xl relative font-bold uppercase text-white">
                        {{ playListInfo.name }}
                        <div v-on:click="editName" class=" absolute -right-3 -top-5 text-sm cursor-pointer text-white" x-show="EditName">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                    </span>
                    <div class="text-white text-xs font-semibold">Minh Phạm • 2 songs, 10 min 37 sec</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full overflow-y-scroll max-h-full scrollbar-hide">
        <div v-for="song in playListSongs" :key="song.id" class="flex px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] items-center relative" x-data="{openModal: false}">
            <Transition>
                <div v-if="song.id == currentSong.id" class="absolute left-0 flex space-x-[1px] h-4 overflow-hidden">
                    <span class="bg-green-400 h-4 w-[2px] translate-y-2 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] translate-y-3 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] translate-y-1 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] animate-music"></span>
                </div>
            </Transition>
            <img @click="playSong(song.id)" class="w-10 h-10 object-cover rounded-lg mr-3" alt="thumb" :src="song.thumb" />
            <div class="flex flex-col w-full">
                <span v-if="song.id != currentSong.id" class="text-sm text-white capitalize font-semibold pt-1" @click="playSong(song.id)">
                    {{ song.name }}
                </span>
                <span v-if="song.id == currentSong.id" class="text-sm text-green-400 capitalize font-semibold pt-1" @click="playSong(song.id)">
                    {{ song.name }}
                </span>
                <span class="text-xs text-gray-500 font-medium">
                    <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name }}{{ index < song.artists.length - 1 ? ", " : "" }}</span>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import axios from "axios";
export default {
    props: ['songs', 'nowsong'],
    data() {
        return {
            playListSongs: this.songs.songs,
            playListInfo: this.songs,
            currentSong: this.nowsong,
            EditPhoto: false,
            imageThumb: this.songs.thumb
        }
    },
    mounted() {
        this.sortSongs()
        this.setListSong()
    },
    methods: {
        sortSongs() {
            this.playListSongs.sort(function (a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                return nameA.localeCompare(nameB);
            });
        },
        playSong(id) {
            let play = true
            let playlistId = this.playListInfo.id
            this.$emit('playsong', {
                id,
                playlistId,
                play
            });
        },
        setListSong() {
            this.$emit('setListSong', this.playListSongs);
        },
        updatePlaylist(event) {
            let imageFile = ref("");
            imageFile.value = event.target.files[0];
            var formData = new FormData();
            let playlistId = this.playListInfo.id
            formData.append("image", imageFile.value);
            axios.post("public/api/update-play-list/" + playlistId, formData, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'content-type': 'multipart/form-data'
                    }
                }).then((response) => {
                    this.imageThumb = response.data.imageSrc
                    return response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        editName(){
            
        }
    },
    watch: {
        nowsong(value) {
            this.currentSong = value
        },
        songs(value) {
            this.playListSongs = value.songs
            this.playListInfo = value
            this.imageThumb = value.thumb
        },
        deep: true,
    }
}
</script>
