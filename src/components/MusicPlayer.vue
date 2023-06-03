<template>
<div class="w-full h-screen">
    <div class='flex h-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
        <div class="flex flex-col w-full">
            <ControllerSong />
            <PlayList />
        </div>
    </div>
</div>
</template>

<script>
import PlayList from './PlayList.vue';
import ControllerSong from './ControllerSong.vue';
import axios from 'axios';

export default {
    components: {
        PlayList,
        ControllerSong
    },
    data(){
      return{
        list:[]
      }
    },
    async mounted() {
          let response = await axios.get('/get-songs').then((response) => {return response.data.songs}).catch(error => {console.error(error)});
          this.list=response;
    },
};
</script>
