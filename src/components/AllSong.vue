<template>
<div class="h-full pb-[50px]">
    <div class="pb-1 flex justify-between items-center mb-2 mt-9">
        <span class="text-base font-semibold uppercase text-white">
            Danh sách bài hát</span>
    </div>
    <div class="w-full overflow-y-scroll max-h-full scrollbar-hide">
        <div v-for="song in songs" :key="song.id" class="flex px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] items-center relative" x-data="{openModal: false}">
            <Transition>
                <div v-if="song.id == currentSong.id" class="absolute left-0 flex space-x-[1px] h-4 overflow-hidden">
                    <span class="bg-green-400 h-4 w-[2px] translate-y-2 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] translate-y-3 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] translate-y-1 animate-music"></span>
                    <span class="bg-green-400 h-4 w-[2px] animate-music"></span>
                </div>
            </Transition>
            <img @click="playSong(song.id)" class="w-10 h-10 object-cover rounded-lg mr-3" alt="User avatar" :src="song.thumb" />
            <div class="flex flex-col w-full">
                <span v-if="song.id != currentSong.id" class="text-sm text-white capitalize font-semibold pt-1" @click="playSong(song.id)">
                    {{ song.name }}
                </span>
                <span v-if="song.id == currentSong.id" class="text-sm text-green-400 capitalize font-semibold pt-1" @click="playSong(song.id)">
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
            <div x-data="{showAllPlayList: false}" x-show="openModal" x-on:click="showAllPlayList=!showAllPlayList" class="w-[170px] h-fit text-xs font-semibold text-[#eaeaea] hover:bg-[hsla(0,0%,100%,.1)] flex py-3 px-2 justify-center bg-[#282828] right-7 top-6 rounded-md absolute">
                <div>add to playlist</div>
                <div v-if="allPlaylist != ''" x-show="showAllPlayList" class="absolute -left-full z-50 w-full space-y-2 h-fit bg-[#3a3a3a] py-2 px-1 rounded-sm">
                    <div x-on:click="openModal=!openModal" @click="addToPlayList(song.id, list.id)" v-for="list in allPlaylist" :key="list.id" class="text-[#eaeaea] hover:bg-[hsla(0,0%,100%,.1)] p-1">{{ list.name }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['songs', 'nowsong', 'userPlaylist'],
    data() {
        return {
            allSong: this.songs,
            currentSong: this.nowsong,
            allPlaylist: this.userPlaylist
        }
    },
    methods: {
        addToPlayList(id, list) {
            this.$emit('addToPlayList', {id, list});
        },
        playSong(id) {
            let play = true
            this.$emit('playsong', {
                id,
                play
            });
        }
    },
    watch: {
        nowsong(value) {
            this.currentSong = value
        },
        userPlaylist(value){
            this.allPlaylist = value
        },
        deep: true,
    }
}
</script>

