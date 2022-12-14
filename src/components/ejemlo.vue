<script setup>
</script>

<template>
    <div id="form">
        <h1>Add Hero</h1>
        <img src="../assets/Perfil .jpg" alt="" id="foto">
        <input type="text" id="name" placeholder="Name" >
        <input type="text" id="univers" placeholder="Universe">
        <input type="text" id="info" placeholder="Information">
        <button id="add">Add</button>
    </div>
</template>
<style lang="scss" scoped>

#form{
<<<<<<< HEAD
=======
    border-radius: 5%;
>>>>>>> 5e61f1eee64b56bd62d7277f0fd5d1556726f400
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;
    width: 30%;
    height: 80%;
    background-color: #E34038;
    float: right ;
    margin-right: 3%;
}
#name{ 
   height: 8%; 
   width: 64%;
   background-color: #155FCF;
   border-radius: 7%;
   border-color:black ;
   justify-content: center;
   padding: 2em 2em 2em 2em;
}
#univers{
    height: 8%;
    width: 64%;
    background-color: #155FCF;
    border-radius: 7%;
    border-color:black ;
    padding: 2em 2em 2em 2em;
}
#info{
    height: 25%;
    width: 64%;
    background-color: #155FCF;
    border-radius: 7%;
    border-color:black ;
    padding: 2em 2em 2em 2em;
}
h1{
    
    text-align: center;
}
#add{
    border-radius: 10%;
    background-color: #FFE7E2;
    width: 40%;
    height: 10%;
    border: none;
    
}
#foto{
<<<<<<< HEAD
    margin-left: 30%;
    border-radius: 60%;
    width: 40%;
=======
    border-radius: 60%;
    width: 40%;  
    margin-left: 30%;
    
}
::placeholder{ 
    color:black;
}
</style>