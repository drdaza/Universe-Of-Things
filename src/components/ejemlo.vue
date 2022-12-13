<script setup>
</script>

<template>
    <div id="form">
        <h1>Add Hero</h1>
        <img src="../assets/Perfil .jpg" alt="" id="foto">
        <input type="text" id="name">
        <input type="text" id="univers">
        <input type="text" id="info">
        <button id=" add">Add</button>
    </div>
</template>
<style lang="scss" scoped>

#form{
    
    display: flex;
    justify-content: center; 
    flex-direction: column;
    width: 30%;
    height: 65%;
    background-color: #E34038;
    float: right ;
    margin-right: 3%;


}
#name{ 
   height: 10%; 
   background-color: #155FCF;
}
#univers{
    height: 10%;
    background-color: #155FCF;
}
#info{
    height: 10%;
    background-color: #155FCF;
}
h1{
    
    text-align: center;
}
#add{

    background-color: #FFE7E2;
}
#foto{
    
}
</style>