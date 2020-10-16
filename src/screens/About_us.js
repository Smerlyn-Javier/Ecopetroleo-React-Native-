import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView,FlatList } from 'react-native';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

// STYLES
import { Heights, Colors } from '../assets/styles'


function About_us(props) {
    return (

        <View style={styles.container}>
        <CustomHeader name='Quiénes Somos' context={props} />
        <ScrollView>
                <View style={styles.infoContainer}>
                    <Image style={styles.image} source={require('../assets/images/resources/horizontal-logo.png')} />

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Sobre Nosotros</Text>

                        <Text style={styles.description}>

                            <Text style={styles.parrafo}>
                                Surge el 10 de septiembre del 2010 cuando un grupo de hombres y mujeres con la firme determinación de lograr un cambio dentro del negocio de las distribuidoras de combustibles en la República Dominicana asumen el reto de llenar las expectativas de igualdad de derecho y de condiciones a los detallistas dominicanos.{"\n"}{"\n"}
                            </Text>

                            <Text style={styles.parrafo}>
                                Para este mismo año nuestra primera estación fue instalada en Villa Mella surgiendo así la
                                primera de la franquicia, siguiéndole meses después San Pedro de Macorís y en la carretera de San Isidro de Santo Domingo Este, lo que sería el inicio de la empresa distribuidora netamente dominicana de mayor empuje y arrastre del país. Actualmente las mas de 110 estaciones que tenemos nos permiten la proyección de crecer a ritmo de 12 estaciones por año.{"\n"}{"\n"}
                            </Text>

                            <Text style={styles.parrafo}>
                                Este crecimiento sostenido, es el resultado de la satisfacción de nuestros asociados, pero más aún, de nuestros consumidores finales, siendo ellos lo que han mantenido de forma ascendente al demandar, apoyar la marca y la calidad de nuestros productos.{"\n"}{"\n"}
                            </Text>

                            <Text style={styles.parrafo}>
                                Somos el reflejo de la sinergia perfecta de detallistas, ofreciendo el mejor de los servicios a nuestros clientes de forma personalizada y la leal repuesta de ellos al recibirlos.{"\n"}{"\n"}{"\n"}
                            </Text>

                            <Text style={styles.parrafo}>
                                Los más de 60 años de experiencia acumulada de nuestros asociados hacen de Eco Petróleo Dominicana la marca preferida de los consumidores y el hogar donde el detallista dominicano encuentran respeto, transparencia, igualdad y sobre todo la maximización de su esfuerzo y trabajo en los beneficios obtenidos al representar la marca.{"\n"}{"\n"}
                            </Text>
                        </Text>
                    </View>


                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Misión</Text>

                        <Text style={styles.description}>

                            <Text style={styles.parrafo}>
                                Ser la empresa distribuidora de combustible más admirada por su transparencia con los detallistas y el servicio ofrecido a nuestros consumidores finales.{"\n"}{"\n"}
                            </Text>
                        </Text>
                    </View>


                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Visión</Text>

                        <Text style={styles.description}>

                            <Text style={styles.parrafo}>
                                Lograr el desarrollo del sector de los hidrocarburos en República Dominicana en forma armoniosa con el medio ambiente y su entorno.{"\n"}{"\n"}
                            </Text>
                        </Text>
                    </View>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Valores</Text>

                        <Text style={styles.description}>

                            <Text style={styles.parrafo}>
                            - Transparencia                                                                                                                     {"\n"}
							- Igualdad{"\n"}
							- Respeto al Medio Ambiente{"\n"}
							- Seguridad en las Operaciones{"\n"}
							- Servicio de Calidad Mundial{"\n"}
                            </Text>
                        </Text>
                    </View>


                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    infoContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        marginBottom: 28,
        height: Heights.HEIGHT_20 * 5,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.RED_LIGHT,
        marginVertical: 10,
    },

    parrafo: {
        textAlign: 'justify',
        fontSize: 14,
    }
})
export default About_us;