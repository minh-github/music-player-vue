<template>
<div>
    <div class="pb-1 flex justify-between items-center mb-2 mt-9">
        <span class="text-base font-semibold uppercase text-white">
        {{ playListInfo.name }}</span>
    </div>
    <div class="overflow-scroll h-[50vh]">
        <div v-for="song in playListSongs" :key="song.id" class="flex py-2 cursor-pointer hover:shadow-md items-center relative" x-data="{openModal: false}">
            <img @click="playSong(song.id)" class="w-10 h-10 object-cover rounded-lg mr-3" alt="thumb" :src="song.thumb" />
            <div class="flex flex-col w-full">
                <span @click="playSong(song.id)" class="text-sm text-white capitalize font-semibold pt-1">
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
export default {
    props: ['songs'],
    data(){
        return{
            playListSongs: this.songs.songs,
            playListInfo: this.songs,
        }
    },
    methods:{
        playSong(id){
            this.$emit('playsong', id);
        }
    }
}
</script>
<style>
</style>
