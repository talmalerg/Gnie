<template>
<div>
<div style="background-color:#536dfe; height:70px">
  <span class="md-display-1" style="color:white;">Add Nodes</span>
</div>
 <perfect-scrollbar class="container mx-auto w-full items-center justify-center"> 
        <list class="flex flex-col p-4" v-for="node in node_types" v-bind:key="node.displayName" @click="nodeSelected(node)">
            
              <list-item class="border-gray-400 flex flex-row mb-2">

                <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">⚡</div>
                  <div class="flex-1 pl-0 mr-4 w-auto ">
                    <div class="font-medium text-sm">{{node.displayName}}</div>
                    <div class="text-gray-600 text-sm">{{node.description}}</div>
                  </div>
                </div>

              </list-item>
        </list>
 </perfect-scrollbar>


</div>
</template>

<script>
export default {
    data () {
    return {
      node_types : [],
    }
  },
  async mounted() {
    
    const baseURI = 'http://142.93.214.102:5001/'
      this.$http.get(baseURI+"rest/node-types")
      .then((result) => {
        this.node_types = result.data.data
      })
  
  },
  methods: {
    nodeSelected (displayName, name) {
        this.$parent.addNode(displayName, name);
     }
   }
}
</script>

<style lang="scss" scoped>

 .ps {
  height: 800px;

}
</style>
