<template>
    <div class="container">
    <div class="card">
        <div class="card-header">
            Editar empleado
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="actualizarRegistros">
                <div class="form-group">
                  <label for="nombre"></label>
                  <input type="text"
                    class="form-control" required name="nombre" v-model="empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el nombre</small>
                </div>
                <div class="form-group">
                  <label for="correo"></label>
                  <input type="email"
                    class="form-control" required name="correo" v-model="empleado.correo" id="correo" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el correo</small>
                </div>
                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-success">Modificar</button>
                    
                    <router-link :to="{name:'listar'}" class="btn btn-warning">Cancelar</router-link>

                </div>
            </form>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            empleado:{}
        }
    },
    created:function(){
        this.obtenerInformacionID();
    },
    methods:{
        obtenerInformacionID(){
            fetch('http://localhost/Servicios/?consultar='+this.$route.params.id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.empleado=datosRespuesta[0];
              
            })
            .catch(console.log)
    
        },
        actualizarRegistros(){

            var datosEnviar={id:this.$route.params.id,nombre:this.empleado.nombre,correo:this.empleado.correo}

            fetch('http://localhost/Servicios/?actualizar='+this.$route.params.id,{
            method:"POST",
            body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
            console.log(datosRespuesta);
            window.location.href='../listar'
            }))

        }
    }
}
</script>
