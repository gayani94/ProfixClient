<template>
        

        <div style="width:60%">

            {{formdata}}
    
        </div>


</template>
<script>

export default {
    data(){
         let formdata = this.$route.params.orderOBJ;
         console.log(this.$route.params.orderOBJ);
         let formattedJson = {
         formdata: this.$route.params.orderOBJ
    };
         return formattedJson;
    }
}


</script>
