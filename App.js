import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cuadroFondo}>
        <Text style={styles.titulo1}>Curriculum</Text>
      </View>

      <View style={styles.cuadroFondo}>
        <Text style={styles.titulo2}>Mauricio Morales Gonzalez</Text>

        <View style={styles.Container}>
          <Image
            source={require('./img/foto.jpeg')}
            style={styles.imagen}
          />

          <View style={styles.textoContainer}>
            
            <Text style={styles.parrafo}>Ingeniero de Software</Text>

            <Text style={styles.parrafoTitulo}>Número Telefonico:</Text>
            <Text style={styles.parrafo}>+52 4613027231</Text>

            <Text style={styles.parrafoTitulo}>Correo Electronico:</Text>
            <Text style={styles.parrafo}>mmorales152@alumnos.uaq.mx</Text>

            <Text style={styles.parrafoTitulo}>Dirección:</Text>
            <Text style={styles.parrafo}>Calle Juan de la barrera #231 Col.Alamos</Text>
          </View>
        </View>
      </View>

      <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Profesion</Text>

          <View style={styles.textoContainer}>

            <Text style={styles.parrafoTitulo}>Perfil:</Text>
            <Text style={styles.parrafo}>Ingeniero de software con habilidades en la creación de aplicaciones móviles, 
            diseño web, manejo de bases de datos, manejo de java y bases solidas en conocimientos de ciberseguridad.</Text>

          </View>
        </View>

        <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Experiencia Profesional</Text>

          <View style={styles.textoContainer}>
            
            <Text style={styles.parrafo}>Líder de equipo en el manejo de bases de datos, creación de aplicaciones móviles
             afrontando desafíos de seguridad y rendimiento en la empresa Meditech Future de 2017 a 2022.</Text>

          </View>
        </View>


        <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Formación Académica</Text>

          <View style={styles.textoContainer}>

          <Text style={styles.parrafoTitulo}>Titulos Profesionales:</Text>
            <Text style={styles.parrafo}>
              •	Ingeniería de Software {"\n"}
              •	Maestría en Ciencia de Datos{"\n"}
            
            </Text>
            <Text style={styles.parrafoTitulo}>Certificaciones</Text>
            <Text style={styles.parrafo}>
              •	Ciberseguridad Cisco Networking Academy {"\n"}
              •	Certificación de Java de Oracle{"\n"}
              •	Certificación Manejo de BD de MySQL Oracle

            </Text>

          </View>
        </View>


        <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Competencias o Habilidades</Text>

          <View style={styles.textoContainer}>

          <Text style={styles.parrafoTitulo}>Competencias técnicas:</Text>
            <Text style={styles.parrafo}>
              •	Desarrollo de aplicaciones móviles con React Native{"\n"}
              •	Manejo de Java {"\n"}
              •	Manejo de bases de datos{"\n"}
              •	Conocimientos avanzados en ciberseguridad{"\n"}

            
            </Text>
            <Text style={styles.parrafoTitulo}>Competencias transversales</Text>
            <Text style={styles.parrafo}>
              •	Resolución de problemas{"\n"}
              •	Trabajo en equipo{"\n"}
              •	Liderazgo{"\n"}
              •	Pensamiento critico{"\n"}


            </Text>

          </View>
        </View>

        <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Idiomas</Text>

          <View style={styles.textoContainer}>

          <Text style={styles.parrafoTitulo}>Certificaciones:</Text>
            <Text style={styles.parrafo}>
              •	Ingles B2{"\n"}
              •	Frances B1 {"\n"}
            </Text>
          
          </View>
        </View>

        <View style={styles.cuadroFondo}>

        <Text style={styles.titulo2}>Otros Datos de Interés</Text>

          <View style={styles.textoContainer}>

          <Text style={styles.parrafoTitulo}>Datos adicionales:</Text>
            <Text style={styles.parrafo}>
              •	Licencia de conducir para vehículos y motocicletas{"\n"}
              •	Participaciones en Congresos Internacionales{"\n"}
              •	Contribuciones a proyectos de código abierto{"\n"}

            </Text>
          
          </View>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c1b398',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadroFondo: {
    backgroundColor: '#605951',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
  },
  titulo1: {
    fontSize: 50,
    color: "#61a6ab",
    fontFamily: 'Arial',
    marginBottom: 10,
  },
  titulo2: {
    fontSize: 30,
    color: "#61a6ab",
    fontFamily: 'Arial',
    marginBottom: 10,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    width: '100%',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginRight: 10, 
  },
  textoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  parrafoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#accec0',
    textAlign: 'left',
    marginBottom: 1,
  },
  parrafo: {
    fontSize: 15,
    fontWeight: '300',
    color: "#fbeec2",
    textAlign: 'left',
    marginBottom: 3,
    textAlign: 'justify', 
  },
});

export default App;
