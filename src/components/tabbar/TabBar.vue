<template>
    <div>
         <div class="tabbar">
<el-row :gutter="0">
  <el-col :span="6">
  <div class="item" path="/home" @click="itemClick('/home')">
  <img v-if="!IsShow('/home')" src="../../assets/img/tabbar/home.svg" alt=""> 
  <img v-else src="../../assets/img/tabbar/home_active.svg" alt="">
  <div :class="{Isfont:IsShow('/home')}">首页</div> 
  </div>
  </el-col>
  <el-col :span="6">
  <div class="item" path="/category" @click="itemClick('/category')">
  <img v-if="!IsShow('/category')" src="../../assets/img/tabbar/category.svg" alt=""> 
  <img v-else src="../../assets/img/tabbar/category_active.svg" alt="">
  <div :class="{Isfont:IsShow('/category')}">分类</div> 
</div>
  </el-col>
  <el-col :span="6">
  <div class="item" path="/cart" @click="itemClick('/cart')">
  <img v-if="!IsShow('/cart')" src="../../assets/img/tabbar/shopcart.svg" alt=""> 
  <img v-else src="../../assets/img/tabbar/shopcart_active.svg" alt="">
  <div :class="{Isfont:IsShow('/cart')}">购物</div> 
    </div>
  </el-col>
  <el-col :span="6">
  <div class="item" path="/profile" @click="itemClick('/profile')">
  <img v-if="!IsShow('/profile')" src="../../assets/img/tabbar/profile.svg" alt=""> 
  <img v-else src="../../assets/img/tabbar/profile_active.svg" alt="">
  <div :class="{Isfont:IsShow('/profile')}">我的</div> 
  </div>
  </el-col>
</el-row>
</div>
    </div>
</template>

<script>
    export default {
        name:'TabBar',
        props:{
            path:String
        },
        data(){
            return{
                /* IsShow:true */
            }
        },
        
        methods:{
            itemClick(d){
                this.$router.replace(d)
               /*  return this.$route.path.indexOf(d)!==-1 */
               /*  console.log(d) */
              /* console.log(this.path) */
            },
            IsShow(d){
                return this.$route.path.indexOf(d)!==-1
            }
        }
    }
</script>

<style>
.Isfont{
    color: red;
}
.tabbar img{
    width: 24px;
    height: 24px;
}
.tabbar{
    text-align: center;
    height: 49px;
     position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,10%);
    background-color: #f6f6f6;
  }
</style>