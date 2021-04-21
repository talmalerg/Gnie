<template>
    
    <div  class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
      <div class="relative mx-auto w-full max-w-2xl"> <!-- w-auto -->
        <div class="bg-white w-full rounded shadow-2xl flex flex-col">

          <div class="text-2xl font-bold mt-3 mb-3">{{name}}</div>
          <div class="flex items-center justify-center">

            <!-- Load Button -->
            <div class="m-3">
              <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="makeRequest">
                <span class="mr-2">Load</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentcolor" d="M19.175,4.856L15.138,0.82c-0.295-0.295-0.817-0.295-1.112,0L8.748,6.098c-0.307,0.307-0.307,0.805,0,1.112l1.462,1.462l-1.533,1.535L7.215,8.746c-0.307-0.307-0.805-0.307-1.112,0l-5.278,5.276c-0.307,0.307-0.307,0.805,0,1.112l4.037,4.037c0.154,0.153,0.355,0.23,0.556,0.23c0.201,0,0.403-0.077,0.556-0.23l5.28-5.276c0.148-0.148,0.23-0.347,0.23-0.556c0-0.209-0.083-0.409-0.23-0.556l-1.464-1.464l1.533-1.535l1.462,1.462c0.153,0.153,0.355,0.23,0.556,0.23c0.201,0,0.402-0.077,0.556-0.23l5.278-5.278c0.147-0.147,0.23-0.347,0.23-0.556C19.406,5.203,19.322,5.004,19.175,4.856zM9.585,13.339l-4.167,4.164l-2.925-2.925l4.166-4.164l0.906,0.905l-0.67,0.668c-0.307,0.307-0.307,0.805,0,1.112c0.154,0.153,0.356,0.23,0.556,0.23c0.203,0,0.403-0.077,0.556-0.23l0.67-0.668L9.585,13.339z M13.341,9.578l-0.906-0.906l0.663-0.662c0.307-0.307,0.307-0.805,0-1.112c-0.307-0.307-0.805-0.307-1.112,0L11.322,7.56l-0.906-0.906l4.166-4.166l2.925,2.925L13.341,9.578z"></path>
                </svg>
              </button>
            </div>

            <!-- Refresh Button -->
            <div class="m-3">
              <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="renderParameters">
                <span class="mr-2">Refresh</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentcolor" d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"></path>
                </svg>
              </button>
            </div>
          </div>

          <span>
            <div v-for="credential in node_credentials" :key="credential">

              <!-- Credential Parameter -->
              <div v-if="(displayCredentials[credential.credentialID] === 1)"  class="md:flex md:items-center mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0 inline-flex space-x-4">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 flex-1" for="grid-state">
                    {{credential.name}}
                  </label>
                
                  <div class="relative flex-1">
                    <select @change="valueChanged" v-bind:id="credential.credentialID" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                      
                        <option v-for="option in credential.options" :key="option" v-bind:value="option.value">
                          {{option.name}} 

                          <!-- Display Description -->
                            <div v-if="option.description">
                              ({{option.description}})
                            </div>

                        </option>
                      
                    </select>

                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                  </div>
                </div>
              
              </div> 


            </div>
          </span>
          

          <!-- For Each Parameter -->      
          <span>
          <div v-for="parameter in node_parameters" :key="parameter">

              <!-- String Parameter -->
              <div v-if="(parameter.type === 'string') && (displayParameters[parameter.parameterID] === 1)" class="md:flex md:items-center mb-6 inline-flex space-x-4">
                <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 flex-1" for="grid-first-name">
                    {{parameter.displayName}} 
                  </label>
                </div>
                <input v-bind:id="parameter.parameterID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 flex-1" type="text" >
                
              </div>  

              <!-- Options Parameter -->
              <div v-if="(parameter.type === 'options') && (displayParameters[parameter.parameterID] === 1)"  class="md:flex md:items-center mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0 inline-flex space-x-4">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 flex-1" for="grid-state">
                    {{parameter.displayName}}
                  </label>
                
                  <div class="relative flex-1">
                    <select @change="valueChanged" v-bind:id="parameter.parameterID" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                      
                        <option v-for="option in parameter.options" :key="option" v-bind:value="option.value">
                          {{option.name}} 

                          <!-- Display Description -->
                            <div v-if="option.description">
                              ({{option.description}})
                            </div>

                        </option>
                      
                    </select>

                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                  </div>
                </div>
              
              </div> 

              <!-- Boolean Parameter -->
              <div v-if="(parameter.type === 'boolean') && (displayParameters[parameter.parameterID] === 1)" class="md:flex md:items-center mb-6 inline-flex space-x-4">
                <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 flex-1" for="inline-full-name">
                    {{parameter.displayName}}
                  </label>
                </div>
                <div class="relative">
                  <t-toggle v-bind:id="parameter.parameterID" @change="valueChanged"></t-toggle>     
                </div>
              </div>   


              <!-- Other Parameter-->
              <div v-if="(parameter.type != 'boolean') && (parameter.type != 'string') && (parameter.type != 'options') && (displayParameters[parameter.parameterID] === 1)" class="md:flex md:items-center mb-6 inline-flex space-x-4">
                <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 flex-1" for="grid-first-name">
                    {{parameter.displayName}} 
                  </label>
                </div>
                <input v-bind:id="parameter.parameterID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 flex-1" type="text" >
              </div>     


          </div>
          </span>

          
          <div class="flex items-center justify-center">
            <!-- Save Button-->
            <div class="m-3">
              <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="onSubmit">
                <span class="mr-2">Save</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentcolor" d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
                </svg>
              </button>
            </div>

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
  props: ['name', 'type'],
  data () {
    return {
      node_parameters : [],
      node_credentials : [],
      displayParameters: {},
      displayCredentials: {},
      formSubmission: {},
      credentialSubmission: {}
    }
  },
    methods: {
      closeModal(){
        this.$emit('closeModal');
      },

      async makeRequest(){
        const baseURI = 'http://142.93.214.102:5001/'
        const node_type = {"nodeNames": [this.type]}
              this.$http.post(baseURI+"rest/node-types",node_type) 
              .then((result) => {
                this.node_parameters = result.data.data[0].properties;
                this.node_credentials = result.data.data[0].credentials;
                
              })
      
      },

      renderParameters(){
      
        var k, j;

        for(k in this.node_parameters){
          //Set Primary Key for Parameter
          this.node_parameters[k]['parameterID'] = this.node_parameters[k].name+'-'+k;
          console.log("Looping Parameter" + k);
          }

        for(j in this.node_credentials){
          //Set Primary Key for Parameter
          this.node_credentials[j]['credentialID'] = this.node_credentials[j].name+'-'+j;
          console.log("Looping Credential" + j);
          }

       console.log(this.node_parameters);
       console.log(this.node_credentials);

       this.valueChanged();
      },


      valueChanged(){

        var parameter; //Integer
        var credential;
        
        this.displayParameters={}
        this.displayCredentials={}

        //Loop All Parameters
        for(parameter in this.node_parameters){

          console.log("Looping Parameter" + parameter);

          //Check if the Parameter Contains displayOptions field
          if(Object.prototype.hasOwnProperty.call(this.node_parameters[parameter], 'displayOptions'))
          {
            
            var finalFlag = 1;

            if(Object.prototype.hasOwnProperty.call(this.node_parameters[parameter].displayOptions, 'show'))
            {

                    //Loop Over the Objects in the show parameter
                    for(const [key, value] of Object.entries(this.node_parameters[parameter].displayOptions.show))
                    {
                      
                      var flag = 0;
                      var j;


                      //Loop over the array of all possible parameter value
                      for(j in value){


                        //Check if that Element Exists or has Rendered
                        if(document.querySelector('[id^='+key+'-]'))
                        {
                            //Check if The Value of the Parameter is Equal to the one Listed
                        
                            if(document.querySelector('[id^='+key+'-]').value == value[j])
                            {
                              flag = 1;
                            }
                        }
                        //Else Set Default Value of Unrendered Element
                        


                      }

                      finalFlag = finalFlag * flag;
                    }

                    //Set Value of Parameter
                    this.displayParameters[this.node_parameters[parameter].parameterID] = finalFlag
            }

            //If Hide is There
            if(Object.prototype.hasOwnProperty.call(this.node_parameters[parameter].displayOptions, 'hide'))
            {

              

              //Loop Over the Objects in the show parameter
                    for(const [key, value] of Object.entries(this.node_parameters[parameter].displayOptions.hide))
                    {
                      
                      flag = 1;
                      var l;

                      //Loop over the array of all possible parameter value
                      for(l in value){

                        //Check if that Element Exists or has Rendered
                        if(document.querySelector('[id^='+key+'-]'))
                        {
                            //Check if The Value of the Parameter is Equal to the one Listed

                            if(document.querySelector('[id^='+key+'-]').value == value[l])
                            {
                              flag = 0;
                            }
                        }


                      }

                      finalFlag = finalFlag * flag;
                    }

                    //Set Value of Parameter
                    this.displayParameters[this.node_parameters[parameter].parameterID] = finalFlag

            }
            
          }
          else{
            this.displayParameters[this.node_parameters[parameter].parameterID] = 1
          }
          console.log(JSON.stringify(this.displayParameters))
        }


         //Loop All Credentials
          for(credential in this.node_credentials){

          console.log("Looping Credential" + credential);

          //Check if the Parameter Contains displayOptions field
          if(Object.prototype.hasOwnProperty.call(this.node_credentials[credential], 'displayOptions'))
          {
            
            finalFlag = 1;

            if(Object.prototype.hasOwnProperty.call(this.node_credentials[credential].displayOptions, 'show'))
            {

                    //Loop Over the Objects in the show parameter
                    for(const [key, value] of Object.entries(this.node_credentials[credential].displayOptions.show))
                    {
                      
                      flag = 0;
                      var m;


                      //Loop over the array of all possible parameter value
                      for(m in value){


                        //console.log(key, value[j])
                        
                        //Check if that Element Exists or has Rendered
                        if(document.querySelector('[id^='+key+'-]'))
                        {
                            //Check if The Value of the Parameter is Equal to the one Listed
                            if(document.querySelector('[id^='+key+'-]').value == value[m])
                            {
                              flag = 1;
                            }
                        }


                      }

                      finalFlag = finalFlag * flag;
                    }

                    //Set Value of Parameter
                    this.displayCredentials[this.node_credentials[credential].credentialID] = finalFlag
            }

            if(Object.prototype.hasOwnProperty.call(this.node_credentials[credential].displayOptions, 'hide'))
            {

              //If Hide is There

              //Loop Over the Objects in the show parameter
                    for(const [key, value] of Object.entries(this.node_credentials[credential].displayOptions.hide))
                    {
                      
                      flag = 1;
                      l;

                      //Loop over the array of all possible parameter value
                      for(l in value){

                        //console.log(key, value[j])
                        
                        //Check if that Element Exists or has Rendered
                        if(document.querySelector('[id^='+key+'-]'))
                        {
                            //Check if The Value of the Parameter is Equal to the one Listed

                            if(document.querySelector('[id^='+key+'-]').value == value[l])
                            {
                              flag = 0;
                            }
                        }


                      }

                      finalFlag = finalFlag * flag;
                    }

                    //Set Value of Parameter
                    this.displayCredentials[this.node_credentials[credential].credentialID] = finalFlag

            }
            
          }
          else{
            this.displayCredentials[this.node_credentials[credential].credentialID] = 1
          }

          

          
        }

        console.log(JSON.stringify(this.displayParameters))
        console.log(JSON.stringify(this.displayCredentials))
        
        
      },

      onSubmit(){

            //Looping All Display Parameters
            for (let [key, value] of Object.entries(this.displayParameters)) {

              if(value === 1){

                //Get the parameter name & ID
                var substring = "-"

                var name = key.substring(0, key.indexOf(substring));

                  var element = document.getElementById(key);
                  if (element != null) {
                      
                      this.formSubmission[name] = document.getElementById(key).value;
                  }
                  else {
                      console.log("Null Value for :"+ name + " Key:" + key)
                  }
                
              }
            }
            
            //Looping All Display Credentials
            for (let [key, value] of Object.entries(this.displayCredentials)) {

              if(value === 1){

                //Get the Credential name & ID
                substring = "-"

                name = key.substring(0, key.indexOf(substring));

                  element = document.getElementById(key);
                  if (element != null) {
                      
                      this.credentialSubmission[name] = document.getElementById(key).value;
                  }
                  else {
                      console.log("Null Value for :"+ name + " Key:" + key)
                  }
                
              }
            }

            console.log(JSON.stringify(this.formSubmission))
            //console.log(JSON.stringify(this.node_parameters))
            console.log(JSON.stringify(this.displayParameters))
            this.$emit('parameter-submit', {form: this.formSubmission, creds: this.credentialSubmission})
            
      }
  },
  
}
</script>

<style lang="scss" scoped>

</style>