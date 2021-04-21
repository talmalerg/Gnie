<template>
  <div class="flowchart-node" :style="nodeStyle" 
    @mousedown="handleMousedown"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    v-bind:class="{selected: options.selected === id}">
    
    <div class="node-port node-input" 
       @mousedown="inputMouseDown"
       @mouseup="inputMouseUp"
       v-for="i in inputs" v-bind:key="i"
      :style="{top: handleMultiplePorts(i, inputs)}"
       >   
    </div>
    <div class="node-main">
      <div v-text="name" class="node-type"></div>
      <div v-text="name" class="node-name"></div>
      <!--<img :src="'http://142.93.214.102:5001/rest/node-icon/'+type"  class="node-image" v-bind:alt="name">-->
      

    </div>
    <div class="node-port node-output" 
      @mousedown="outputMouseDown"
      v-for="o in outputs" v-bind:key="o"
      :style="{top: handleMultiplePorts(o, outputs)}">
      
    </div>
    <div v-show="show.delete" class="node-delete">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'FlowchartNode',
  props: {
    id: {
      type: Number,
      default: 1000,
      validator(val) {
        return typeof val === 'number'
      }
    },
    x: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },    
    y: {
      type: Number,
      default: 0,
      validator(val) {
        return typeof val === 'number'
      }
    },
    position: {
      type: Array,
    },
    type: {
      type: String,
      default: 'Default'
    },
    name: {
      type: String,
      default: 'input name'
    },
    options: {
      type: Object,
      default() {
        return {
          centerX: 1024,
          scale: 1,
          centerY: 140,
        }
      }
    },
    inputs: {
      type: Number,
      
      validator(val) {
        return typeof val === 'number'
      }
    },
    outputs: {
      type: Number,
      
      validator(val) {
        return typeof val === 'number'
      }
    }
  },
  data() {
    return {
      show: {
        delete: false,
      }
    }
  },
  mounted() {
  },
  computed: {
    nodeStyle() {
      return {
        top: this.options.centerY + this.y * this.options.scale + 'px', // remove: this.options.offsetTop + 
        left: this.options.centerX + this.x * this.options.scale + 'px', // remove: this.options.offsetLeft + 
        transform: `scale(${this.options.scale})`,
      }
    }
  },
  methods: {
    handleMousedown(e) {
      const target = e.target || e.srcElement;
      // console.log(target);
      if (target.className.indexOf('node-input') < 0 && target.className.indexOf('node-output') < 0) {
        this.$emit('nodeSelected', e);
      }
      e.preventDefault();
    },
    handleMouseOver() {
      this.show.delete = true;
    },
    handleMouseLeave() {
      this.show.delete = false;
    },
    outputMouseDown(e) {
      this.$emit('linkingStart')
      e.preventDefault();
    },
    inputMouseDown(e) {
      e.preventDefault();
    },
    inputMouseUp(e) {
      this.$emit('linkingStop')
      e.preventDefault();
    },
    handleMultiplePorts(pos, max){
      switch(max)
      {
        case 1: return '45px'
        

        case 2: switch(pos){
          case 1: return '25px'
          
          case 2: return '65px'

          default: return '50px'
        }
        

        case 3: switch(pos){
          case 1: return '15px'
          
          case 2: return '45px'

          case 3: return '75px'

          default: return '75px'
        }
        

        case 4: switch(pos){
          case 1: return '5px'
          
          case 2: return '35px'

          case 3: return '65px'

          default: return '95px'
        }
        

        default: return '50px'
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$themeColor: rgb(255, 136, 85);
$portSize: 15;

.flowchart-node {
  margin: 0;
  width: 120px;
  height: 120px;
  position: absolute;
  box-sizing: border-box;
  border: none;
  border-radius: 25px;
  background: white;
  z-index: 1;
  opacity: .95;
  cursor: move;
  transform-origin: top left;
  .node-main {
    text-align: center;
    .node-type {
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      background: $themeColor;
      color: white;
      font-size: 13px;
      padding: 6px;
    }
    .node-name { 
      font-size: 13px;
    }
    .node-image{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 15px;
      margin-bottom: 15px;
      width: 75px;
      border-radius: 10%;
    }
  }
  .node-port {
    position: absolute;
    width: #{$portSize}px;
    height: #{$portSize}px;
    //left: 50%;
    //transform: translate(-50%);
    border: 1px solid #ccc;
    border-radius: 100px;
    background: white;
    &:hover {
      background: $themeColor;
      border: 1px solid $themeColor;
    }
  }
  .node-input {
    top: #{$portSize*3.5}px;
    left: #{-$portSize/1.5}px;
  }
  .node-output {
    top: #{$portSize*3.5}px;
    right: #{-$portSize/1.5}px;
    
  }
  .node-delete {
    position: absolute;
    right: -6px;
    top: -6px;
    font-size: 12px;
    width: 12px;
    height: 12px;
    color: $themeColor;
    cursor: pointer;
    background: white;
    border: 1px solid $themeColor;
    border-radius: 100px;
    text-align: center;
    &:hover{
      background: $themeColor;
      color: white;
    }
  }
}
.selected {
  box-shadow: 0 0 0 2px $themeColor;
}
</style>
