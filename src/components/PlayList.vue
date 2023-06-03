<template>
<div class="flex flex-col p-5">
    <div class="border-b pb-1 flex justify-between items-center mb-2">
        <span class=" text-base font-semibold uppercase text-gray-700"> play list</span>
        <img class="w-4 cursor-pointer" src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png" />
    </div>
    <div class="overflow-scroll h-[50vh] px-2">
        <div @click="playSong(song.id)" v-for="song in songs" :key="song.id" class="flex border-b py-3 cursor-pointer hover:shadow-md px-2 ">
            <img class='w-10 h-10 object-cover rounded-lg' alt='User avatar' :src='song.thumb'>
            <div class="flex flex-col px-2 w-full">
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
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            songs: []
        }
    },
    async mounted() {
        let response = await axios.get('/get-songs').then((response) => {
            return response.data.songs
        }).catch(error => {
            console.error(error)
        });
        this.songs = response;
    },
    methods: {
        playSong(id){
            console.log(id);
        }
    }
};
</script>
