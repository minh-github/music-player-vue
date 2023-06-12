<template>
<div>
    <div class="pb-1 flex justify-between items-center mb-2 mt-9">
        <span class="text-base font-semibold uppercase text-white">
            Danh sách bài hát</span>
    </div>
    <div class="overflow-scroll h-[50vh]">
        <div @click="playSong(song.id)" v-for="song in songs" :key="song.id" class="flex py-2 cursor-pointer hover:shadow-md items-center relative" x-data="{openModal: false}">
            <img class="w-10 h-10 object-cover rounded-lg mr-3" alt="User avatar" :src="song.thumb" />
            <div class="flex flex-col w-full">
                <span class="text-sm text-white capitalize font-semibold pt-1">
                    {{ song.name }}
                </span>
                <span class="text-xs text-gray-500 font-medium">
                    <span v-for="(artist, index) in song.artists" :key="artist.id">{{ artist.name
                      }}{{ index < song.artists.length - 1 ? ", " : "" }}</span>
                </span>
            </div>
            <div x-on:click="openModal=!openModal">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-[#999999] hover:fill-white transition" width="24" height="24" viewBox="0 0 24 24" style="transform: ; msfilter: ">
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
            </div>
            <div x-show="openModal" x-on:click="openModal=false" @click="addToPlayList(song.id)" class="w-[170px] h-fit text-xs font-semibold text-[#eaeaea] hover:bg-[hsla(0,0%,100%,.1)] flex py-3 px-2 justify-center bg-[#282828] right-7 top-6 rounded-md absolute">
                <div>add to playlist</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['songs'],
    data(){
        return {
            allSong: this.songs,
        }
    },
    methods:{
        addToPlayList(id){
            this.$emit('addToPlayList', id);
        },
        playSong(id){
            this.$emit('playsong', id);
        }
    }
}
</script>

<style>

</style>
