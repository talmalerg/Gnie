<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <h1> Genie Editor</h1>
    
    <div class="tool-wrapper">

      <div class="flex items-center justify-center">

          <!-- Workflow Name Input-->
          <div class="-mx-0 md:flex mb-3">
              <div class="px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                    Workflow Name
                  </label>
                  <input v-model="scene.workflowName" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Genie">
              </div>
          </div>

          <!-- Save & Run Button -->
          <div class="m-3">
                  <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="saveRun">
                    <span class="mr-2">Save & Run</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentcolor" d="M9.917,0.875c-5.086,0-9.208,4.123-9.208,9.208c0,5.086,4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208
								C19.125,4.998,15.003,0.875,9.917,0.875z M9.917,18.141c-4.451,0-8.058-3.607-8.058-8.058s3.607-8.057,8.058-8.057
								c4.449,0,8.057,3.607,8.057,8.057S14.366,18.141,9.917,18.141z M13.851,6.794l-5.373,5.372L5.984,9.672
								c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.575,0,0.794l2.823,2.823c0.02,0.028,0.031,0.059,0.055,0.083
								c0.113,0.113,0.263,0.166,0.411,0.162c0.148,0.004,0.298-0.049,0.411-0.162c0.024-0.024,0.036-0.055,0.055-0.083l5.701-5.7
								c0.219-0.219,0.219-0.575,0-0.794C14.425,6.575,14.069,6.575,13.851,6.794z"></path>
                    </svg>
                  </button>
          </div>

          <!-- Show Executions Button -->
          <div class="m-3">
                  <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="showExecutions">
                    <span class="mr-2">Executions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentcolor" d="M9.917,0.875c-5.086,0-9.208,4.123-9.208,9.208c0,5.086,4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208
								C19.125,4.998,15.003,0.875,9.917,0.875z M9.917,18.141c-4.451,0-8.058-3.607-8.058-8.058s3.607-8.057,8.058-8.057
								c4.449,0,8.057,3.607,8.057,8.057S14.366,18.141,9.917,18.141z M13.851,6.794l-5.373,5.372L5.984,9.672
								c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.575,0,0.794l2.823,2.823c0.02,0.028,0.031,0.059,0.055,0.083
								c0.113,0.113,0.263,0.166,0.411,0.162c0.148,0.004,0.298-0.049,0.411-0.162c0.024-0.024,0.036-0.055,0.055-0.083l5.701-5.7
								c0.219-0.219,0.219-0.575,0-0.794C14.425,6.575,14.069,6.575,13.851,6.794z"></path>
                    </svg>
                  </button>
          </div>

          <!-- Download JSON Button -->
          <div class="m-3">
                  <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="getJSON">
                    <span class="mr-2">Share Workflow</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentcolor" d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
                    </svg>
                  </button>
          </div>

      </div>
      
    </div>

    <div v-if="toggleModal" class="absolute z-40 inset-0 opacity-25 bg-black"></div>

     <ParametersModal 
     v-if="toggleModal" 
     :name="modalName" 
     :type="modalType"
     @closeModal="modalClose"
     @parameter-submit="nodeDataSave"/>

     <ExecutionsModal
     v-if="toggleExecutions"
     @closeExecutions="executionsClose"
     @executionDetails="executionDetails"/>

    <ExecutionDetails
     v-if="toggleDetails"
     :execution="executionData"
     @closeExecutionDetails="executionDetailsClose"
     />
    
    

    <NodeList style="float:right; width:300px;" />
    
    <simple-flowchart :scene.sync="scene" 
      @nodeClick="nodeClick"
      @nodeDoubleClick="nodeDoubleClick"
      @nodeDelete="nodeDelete"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @canvasClick="canvasClick"
      :height="800"/>

      

  </div>
</template>

<script>
import SimpleFlowchart from './components/SimpleFlowchart.vue'
import NodeList from './components/NodeList'
import ParametersModal from './components/ParametersModal.vue'
import ExecutionsModal from './components/ExecutionsModal.vue'
import ExecutionDetails from './components/ExecutionDetails.vue'





export default {
  name: 'app',
  components: {
    SimpleFlowchart,
    NodeList,
    ParametersModal,
    ExecutionsModal,
    ExecutionDetails
  },
  data() {
    return {
      scene: {
        workflowName: 'Workflow Name Here',
        id: null,
        centerX: 0,
        centerY: 0,
        scale: 1,
        nodes: [
          {"name":"Start","type":"n8n-nodes-base.start","parameters":{},"position":[250,300],"id":1,"x":250,"y":300,"inputs":0,"outputs":1}
        ],
        links: [],
        "connections": {
                          "Start": {
                            "main": [
                              []
                            ]
                          },
        }
      },
      newNodeType: 0,
      newNodeLabel: '',
      toggleModal: false,
      toggleExecutions: false,
      toggleDetails: false,
      executionData: {},
      modalName: '',
      modalType: '',
    }
  },
  methods: {
    canvasClick(e) {
      console.log('canvas Click, event:', e)
    },
    addNode(nodeData) {
      let maxID = Math.max(0, ...this.scene.nodes.map((link) => {
        return link.id
      }))
      this.scene.nodes.push({
        name: `${nodeData.displayName} ${ maxID + 1}`,
        type: nodeData.name,
        parameters: {},
        position: [300, 50],
        id: maxID + 1,
        x: 300,
        y: 50,
        inputs: nodeData.inputs.length, 
        outputs: nodeData.outputs.length
      })

      
      const newNodeConnection = {
            "main":[
              []
            ]
          };
      this.scene.connections[`${nodeData.displayName} ${ maxID + 1}`] = newNodeConnection;
    },
    //Save Node Data (from Modal)
    nodeDataSave(nodeParameterData){

      var currentNode = this.modalName;
      this.scene.nodes.forEach(function (arrayItem) {

        //Set Parameters Data to Node Data
        if(arrayItem.name === currentNode){
          arrayItem.parameters = nodeParameterData.form;
          arrayItem.credentials = nodeParameterData.creds;
        }
      });

      this.modalClose();

    },
    nodeClick(id) {
      console.log('node click', id);
    },
    nodeDoubleClick(selectedNode) {

      this.modalName = selectedNode.name;
      this.modalType = selectedNode.type;
      //Open Modal
      this.toggleModal = true
      console.log('node Double-Click:')

    },
    showExecutions() {
      this.toggleExecutions = true;
      console.log('Executions Modal Opened')
    },
    executionsClose(){
      this.toggleExecutions = false;
      console.log('Executions Modal Closed')
    },
    executionDetailsClose(){
      this.toggleDetails = false;
      console.log('Executions Details Modal Closed')
    },
    nodeDelete(id) {
      console.log('node delete', id);
    },
    linkBreak(id) {
      console.log('link break', id);
    },
    linkAdded(link) {
      console.log('new link added:', link);
    },
    //Download JSON File
    getJSON(){
      
      //console.log(JSON.stringify(this.scene));

      var finalJSON = { "name": this.scene.workflowName, 
                        "nodes": this.scene.nodes,
                        "connections": this.scene.connections,
                        "active": false,
                        "settings": {}
                        }


        // Creating TempJSON so main JSON does not affect
        var jsonString = JSON.stringify(finalJSON);
        var tempJSON = JSON.parse(jsonString);

        //Delete Unnecessary Elements for Server JSON
        tempJSON.nodes.forEach(function(v){
        
            delete(v.id)
            delete(v.x)
            delete(v.y)
            delete(v.inputs)
            delete(v.outputs)
            
        })
      
      
      
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(tempJSON)));
      element.setAttribute('download', 'genie.json');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

    },
    modalOpen(){
      this.toggleModal =  !this.toggleModal;
      console.log('Modal Opened');
    },
    modalClose(){
      this.toggleModal = !this.toggleModal;
      console.log('Modal Closed');
    },

    saveRun(){
      if(this.scene.id === null){
        console.log("Creating Workflow")
        this.createWorkflow();
        this.runWorkflow();
      }
      else{
        console.log("Updating Workflow")
        this.updateWorkflow();
        this.runWorkflow();
      }
    },
    executionDetails(execution){
      this.executionData = execution;
      this.toggleExecutions = false;
      this.toggleDetails = true;
      
    },

    createWorkflow(){

        const baseURI = 'http://142.93.214.102:5001/'
        const finalJSON = { "name": this.scene.workflowName, 
                        "nodes": this.scene.nodes,
                        "connections": this.scene.connections,
                        "active": false,
                        "settings": {}
                        }

        // Creating TempJSON so main JSON does not affect
        var jsonString = JSON.stringify(finalJSON);
        var tempJSON = JSON.parse(jsonString);

        //Delete Unnecessary Elements for Server JSON
        tempJSON.nodes.forEach(function(v){
        
            delete(v.id)
            delete(v.x)
            delete(v.y)
            delete(v.inputs)
            delete(v.outputs)
            
        })

        this.$http.post(baseURI+"rest/workflows",tempJSON) 
              .then((result) => {
                console.log(result.data);
                if(result.data.data.id != null){
                  this.scene.id = result.data.data.id
                  console.log('Successfully Created Workflow')
                }
                else{
                  console.log("Error in Creating Workflow: "+ result.data.message)
                }

               
                
              })
    },

    updateWorkflow(){
      const baseURI = 'http://142.93.214.102:5001/'
        var finalJSON = { "name": this.scene.workflowName, 
                        "nodes": this.scene.nodes,
                        "connections": this.scene.connections,
                        "active": false,
                        "settings": {}
                        }

        // Creating TempJSON so main JSON does not affect
        var jsonString = JSON.stringify(finalJSON);
        var tempJSON = JSON.parse(jsonString);

        //Delete Unnecessary Elements for Server JSON
        tempJSON.nodes.forEach(function(v){
        
            delete(v.id)
            delete(v.x)
            delete(v.y)
            delete(v.inputs)
            delete(v.outputs)
            
        })

        this.$http.patch(baseURI+"rest/workflows/"+this.scene.id,tempJSON) 
              .then((result) => {
                console.log(result.data);
                if(result.data.data.id != null){
                  this.scene.id = result.data.data.id
                  console.log('Successfully Updated')
                }
                else{
                  console.log("Error in Updating Workflow: "+ result.data.message)
                }
                
              })
    },

    runWorkflow(){
        const baseURI = 'http://142.93.214.102:5001/'
        const finalJSON = { "name": this.scene.workflowName, 
                        "nodes": this.scene.nodes,
                        "connections": this.scene.connections,
                        "active": false,
                        "settings": {}
                        }

        // Creating TempJSON so main JSON does not affect
        var jsonString = JSON.stringify(finalJSON);
        var tempJSON = JSON.parse(jsonString);

        //Delete Unnecessary Elements for Server JSON
        tempJSON.nodes.forEach(function(v){
        
            delete(v.id)
            delete(v.x)
            delete(v.y)
            delete(v.inputs)
            delete(v.outputs)
            
        })

        var runJSON = {"workflowData": tempJSON}

        this.$http.post(baseURI+"rest/workflows/run",runJSON) 
              .then((result) => {
                console.log(result.data);
                if(result.data.data != null){
                  
                  console.log('Successfully Executed Workflow: Execution ID:'+ result.data.data.executionId)
                }
                else{
                  console.log("Error in Running Workflow: "+ result.data.message)
                }

                
                
              })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 800px;
  .tool-wrapper {
    position: relative;
  }

}
</style>