

# Enlazando mi proyecto con GitHub:
* .md MarkDown

* [] Crear una Cuenta con GitHub.
* [] Crear un Repositoria en GitHub - Nombre del repo = js-13-5b.
* [] Cambiar el nombre de mi rama local master -> main.
* [] Agregar cambios a la zona de preparacion con el comando **git add .**
* [] Comfirmar los cambios con comandos **git commit -am "primer commit remoto"**
* [] Agregar mi repositorio remoto a mi repositorio local usando **git remote add origin url_remote**
* [] Subir mis cambios al remoto usando **git push -u origin main**


## Temas puntuales:



### Lab 8.1  Instalanciones de paquetes.
  
   * [ ] Instalar paquetes de codigos con NPM.
    * [ ] Instalar **yargs** con el comando  ```npm install yargs``` 
    * [ ] Agregar archivo **.gitignore** .
    * [ ] Editar archivo **.gitignore** para ignorar la carpeta **node_modules**
    * [ ] Editor archivo **.gitignore** para ignorar el archivo **package-lock.json**
    * [ ] Intalar **colors** con el cambio ```npm i colors``` cambio install por i.
    * [ ] Confirmar mi **Package.json** tenga las dependencias de **yargs** y **colors**.
    * [ ] Usar comando **git add .** para preparar los cambios.
    * [ ] Usar comando **git commit -am "Instalar paquetes yargs y colors"**.
    * [ ] Usar comando **git push** para subir mis cambios al remoto.

        

### Lab 8.2 Creacion organizacion de proyecto
* [ ] Crear el archivo **node-CLI/app.js**
  * [ ] Hacemos **git add  .**
  * [ ] Hacemos **git commit -am "crear app.js"**
  * [ ] Hacemos **git push**
* [ ] Crear diretorio **node-CLI/tools** con
  * [ ] crear **node-CLI/tools/index.js**
  * [ ] crear **node-CLI/tools/argvs.js**
  * [ ] crear **node-CLI/tools/files.js**
  * [ ] crear **node-CLI/tools/options.js**
  * [ ] crear **nodeCLI/tools/task.js**
* [ ] Crear diretorio **node-CLI/db** con 
  * crear **node-CLI/db/task.json**
  * Hacemos **git add  .**
  * Hacemos **git commit -am "crear tools senttings"**
  * Hacemos **git push**



  ### Lab 8.3 Trabajando con ficheros en Node.
  * [ ] Empesamos a trabajar con file.js
    * [ ] Importamos paquetes Path y Colors

  * [ ] Usamos paquetes importados en nuestro codigo con la funcion loadtask()
    * [ ] Exportamos nuestra funcion loadtask()
    * [ ] Pruebas de loadtask()
    * [ ] Hacemos **git add .**
    * [ ] Hacemos **git commit -am "crea funcion loadtask"**
    * [ ] Hacemos **git push**

 * [ ] Usamos paquetes importados en nuestro codigo con la funcion savetask()
    * [ ] Exportamos nuestra funcion savetask()
    * [ ] Pruebas de savetask()
    * [ ] Hacemos **git add .**
    * [ ] Hacemos **git commit -am "crea funcion savetask"**
    * [ ] Hacemos **git push**
    

### Lab 8.4 Trabajando con opciones de Yargs
* [ ] Empesamos a trabajar con **options.js**
  * [ ] Creamos los objetos para nuestros comandos:
      * description
      * title
      * completed
      * erased
 * [ ] Creamos los objetos para nuestros comandos:
      * optionsCreate
      * optionsUpdate
      * optionsErase
* [ ] Exportamos nuestras opciones
* [ ] Hacemos **git add .**
* [ ] Hacemos **git commit -am "Configurar arvs con optiones para los comandos"**
* [ ] Hacemos **git push**


### Lab 8.5 Trabajamos en funciones para los tasks o tareas.
* [ ] Empesamos a trabajar con **task.js**
  * [ ] Creamos funciones para trabajar los task:
        * createTask
        * updateTask
        * eraseTask
  * [ ] Exportamos nuestras opciones
  * [ ] Hacemos **git add .**
  * [ ] Hacemos **git commit -am "Configurar arvs con optiones para los comandos"**
  * [ ] Hacemos **git push**       

### Lab 8.6 Trabajamos con la configuración de Yargs
* [ ] Empesamos a trabajar con el fichero **argvs.js**
  * [ ] agregando los commandos que usara yargs
  * [ ] exporto el objecto ```argv``` para nuestro proyecto.ss
* [ ] empezamos a trabajar con ```index.js```
  * [ ] importamos y exportamos nuestras herramientas.
* [ ] Hacemos **git add .**
* [ ] Hacemos **git commit -am "exportar tools componets"**
* [ ] Hacemos **git push** 


### Lab 8.7 Trabajamos con nuestra aplicación principal
* [ ] Empezamos a trabajar con el fichero **app.js
* [ ] Importamos las herramientas ```tasks argv``` y el paquete```colors```
  * [ ] Usamos extrutura  ```switch```
    * [ ] filtramos los comandos ```create update delete```
* [ ] Hacemos **git add .**
* [ ] Hacemos **git commit -am "finaliza proyecto-pruebas de funcionamiento"**
* [ ] Hacemos **git push** 

