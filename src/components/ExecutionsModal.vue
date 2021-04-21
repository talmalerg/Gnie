<template>
    
    <div  class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
      <div class="relative mx-auto w-full max-w-2xl"> <!-- w-auto -->
        <div class="bg-white w-full rounded shadow-2xl flex flex-col">

          <div class="text-2xl font-bold mt-3 mb-3">Executions</div>
          <div class="flex items-center justify-center">


            <!-- Refresh Button -->
            <div class="m-3">
              <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="makeRequest">
                <span class="mr-2">Refresh</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentcolor" d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"></path>
                </svg>
              </button>
            </div>
          </div>

          <span>
            <perfect-scrollbar class="container mx-auto w-full items-center justify-center"> 
                    <list class="flex flex-col p-4" v-for="execution in executions" v-bind:key="execution.id" @click="executionSelected(execution)">
                        
                        <list-item class="border-gray-400 flex flex-row mb-2">

                            <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">⚡</div>
                            <div class="flex-1 pl-0 mr-4 w-auto">
                                <div class="font-medium text-sm">{{execution.workflowName}}</div>
                                <div class="text-gray-600 text-sm">Finished: {{execution.finished}}</div>
                            </div>
                            </div>

                        </list-item>
                    </list>
            </perfect-scrollbar>
          </span>

          
          <div class="flex items-center justify-center">
            

            <!-- Close Button-->
            <div class="m-3">
              <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="closeModal">
                <span class="mr-2">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentcolor" d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"/>
                </svg>
              </button>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      executions : [],
      
    }
  },
    methods: {
      closeModal(){
        this.$emit('closeExecutions');
      },
      executionSelected(execution){
          this.$emit('executionDetails', execution)
      },

      async makeRequest(){
        const baseURI = 'http://142.93.214.102:5001/'
              this.$http.get(baseURI+"rest/executions") 
              .then((result) => {
                this.executions = result.data.data.results
              })
      
      },
      
  },
  
}
</script>

<style lang="scss" scoped>

</style>