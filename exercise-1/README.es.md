# Aprendiendo React y TypeScript

En este ejercicio, presentaremos las dos librerias principales que utilizaremos para desarrollar aplicaciones web: [React](https://reactjs.org/) y [TypeScript](https://www.typescriptlang.org/). Para esto, veremos ejemplos pequeños pero concretos que nos ayudarán a comprender los conceptos principales, de a uno a la vez.

Pero antes de comenzar a codear, hay que entender lo que vamos a hacer. Pensa en el diseño de alguna interfaz de usuario (UI), la más común que hayas visto y preguntate:

1. Si tengo que hacer esto, ¿por dónde deberia empezar? ¿Tengo que hacer todo de cero? ¿Hay algo por ahí que pueda usar?
1. ¿Cómo puedo dividir el trabajo en diferentes tareas? ¿Cuáles son las más importantes?
1. ¿Es posible reutilizar lo que voy a hacer con otros proyectos a futuro?

![](./assets/images/typical-ui.png)

En las siguientes secciones, trabajaremos juntos para proponer algunas respuestas a estas preguntas.

## Introduccion: Desarrollo web

Antes de comenzar, hagamos un resumen rápido de los conceptos fundamentales del desarrollo web. Si ya los conoces, omiti toda esta parte y anda a la seccion 1.

- Las aplicaciones web son, básicamente, aplicaciones que pueden ejecutarse mediante un navegador (web) (Chrome, Firefox, Edge, Safari, Internet Explorer, etc.).
- Los navegadores web solo entienden XMLs (HTML en especifico), JavaScript y CSS.
  - HTML proporciona la estructura básica de los sitios, también conocido como su _markup_.
  - CSS se utiliza para controlar la presentación, el formato y el diseño, también conocidos como sus estilos.
  - JavaScript se usa para cambiar el comportamiento de diferentes elementos HTML y estilos CSS dinámicamente. Por lo general, depende de la interacción del usuario (por ejemplo, un clic de un botón, un toque del dedo o incluso el habla).

Por ejemplo, cuando navegas al sitio de Google porque quiere buscar algo, ¡está utilizando una aplicación web!

![Ejemplo de Google](./assets/images/google-search-example.gif)

En este caso:

1. La estructura de la página se define utilizando HTML (el texto que se muestra como resultados, la sección derecha, etc.).
1. Como esta presentada la estructura de la pagina se configura mediante CSS (el color verde de las URL, el diseño de los resultados que son videos, etc).
1. Vos controlas la interacción del usuario con el código JS. Por ejemplo, lo que sucede cuando alguien escribe una pregunta y presiona _ENTER_ se configura via código.

La cantidad de cosas que podemos hacer en cualquier aplicación web y su complejidad ha crecido con el tiempo. Afortunadamente, ahora podemos (re) usar librerias JavaScript para evitar reinventar la rueda y reducir el trabajo repetitivo. **React** y **TypeScript** son algunas de estas.

## Section 1: What ReactJS is and what it is for

> **Nota:** Si deseas obtener más información sobre ReactJS, visita el [sitio oficial](https://reactjs.org/docs/getting-started.html).

React es una libreria de JavaScript para construir interfaces de usuario. Una de las mejores cosas es que cambia la forma en que generalmente pensamos al crear una aplicación. Propone dividir la lógica en partes, llamadas **componentes**, siguiendo el [principio de responsabilidad única o SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle): cada pieza (componente) debe hacer _solo_ una cosa.

Usando como ejemplo nuestro diseño anterior de interfaz de usuario, podemos dividir la página en (por ejemplo) los siguientes componentes:

- Un _TableComponent_, para mostrar todas nuestras entidades.
- _SearchComponent_, para filtrar las entidades que mostramos.
- _DetailsComponent_, para mostrar información relacionada con una entidad seleccionada.
- _SidebarPanelComponent_, para encapsular la lógica de lo que representamos en el panel izquierdo (los enlaces y el botón _PROD_).
- ...y así

![](./assets/images/typical-ui-components.png)

La forma en que dividimos nuestro diseño en componentes es completamente arbitraria y, aunque parezca difícil de hacerlo al comienzo, será más fácil con el tiempo. La experiencia con el tiempo nos dirá cuál es la mejor opción en términos de reutilización y mantenimiento.

> **Nota:** Podemos continuar dividiendo los componentes que definimos en componentes más pequeños, cada uno responsable de hacer una sola tarea. ¿Podrias proponer cómo dividir el componente _TableComponent_ en piezas más pequeñas?

### React en accion

Como dijimos antes, React es una libreria que nos ayudará a construir nuestra interfaz dividiéndola en componentes. Vamos a averiguar juntos lo que significa esto al ver los siguientes ejemplos (de la documentación de ReactJS):

1. Abri el ejemplo **Hello React!** haciendo click [aqui](https://codesandbox.io/s/hello-react-lbisk).
1. Analiza el codigo durante unos minutos. Tene en cuenta que el componente de la aplicación es una función de React que devuelve _markup_ con sintaxis _JSX_.

   > **Que es JSX?** JSX es la extensión de facto de sintaxis  para representar elementos HTML en el ecosistema React. No es HTML, pero es bastante similar. Puede recordarle a un lenguaje tipo _template_, pero también viene con todo el poder de JavaScript. Si desea obtener más información sobre JSX, consulte [aquí](https://reactjs.org/docs/introducing-jsx.html).

   **Un browser no entiende JSX**. Para que nuestro código funcione en los navegadores, necesitamos _compilar_ nuestro código a JavaScript, que los navegadores puedan entender. No tenemos que preocuparnos por esto por ahora, pero el resultado final de este código es JavaScript puro y antiguo:

   ```js
   var App = function() {
     return React.createElement("h1", null, "Hello React!");
   };
   var rootElement = document.getElementById("root");

   ReactDOM.render(React.createElement(App, null), rootElement);
   ```

1. Ahora modificaremos el ejemplo para proporcionar la capacidad de personalizar el mensaje presentado en la aplicación. Reemplaza el mensaje hardcodeado con la propiedad `message` que vamos a establecer al configurar el componente React. En resumen:
   1. Proporcionar la propiedad `message` al componente `App`:

      ```js
      ReactDOM.render(<App message="Hello React!!" />, rootElement);
      ```

   1. Actualizar el componente `App` con el siguiente codigo:

      ```js
      const App = ({ message }) => <h1>{message}</h1>;
      ```

   Las funciones de React pueden recibir arbitrariamente entradas de solo lectura llamadas **props** (abreviatura de _properties_). Estas **props**, modelan lo que devuelve la función. Por ejemplo en nuestro ejemplo anterior el mensaje que enviamos en el navegador depende de la propiedad `message`.

   > **Nota:** Como regla general, todas las funciones y componentes de React deben actuar como funciones puras con respecto a sus props. Lo que significa que lo que devuelven (o procesan) en el navegador está determinado por sus valores de entrada, pero sin mutar los argumentos recibidos (también conocido como _"side effect"_).

1. Sigamos con otro ejemplo. Abri el ejemplo **React Timer** haciendo click [aqui](https://codesandbox.io/s/react-timer-2y4k8).
1. El codigo se ve mas complicado ahora, tomate unos minutos para revisarlo. Ahora tenemos dos archivos: un _index.jsx_ que inicializa nuestra aplicacion y el archivo _Timer.jsx_ que define un componente React. Este componente es una clase que extiende `React.Component`, tiene un metodo `constructor()` y otros 4 metodos mas.

  ```js
   export default class Timer extends React.Component {
     constructor(props) { ... }

     tick() { ... }

     componentDidMount() { ... }

     componentWillUnmount() { ... }

     render() {
       return <div>Seconds: {this.state.seconds}</div>;
     }
   }
  ```

  React permite definir componentes como clases o funciones. Cuando se extiende a **React.Component**, el único requisito es definir un método **render()**, responsable de devolver los elementos JSX que se mostrarán en el navegador. Además, un componente de clase React proporciona otros métodos integrados que se ejecutan en momentos particulares (pero específicos). Se puede **hookear** el código propio a estos [métodos de ciclo de vida](https://reactjs.org/docs/react-component.html#the-component-lifecycle) simplemente implementándolos. Algunos de estos métodos son el `constructor ()`, `componentWillMount ()`, `componentWillUnmount ()`, pero hay otros.

   > **Note:** El metodo **render()** es equivalente la funcion React que usamos en el ejemplo anterior.

1. El método propio `tick()` actualiza el estado del componente llamando a `this.setState()`.

  ```js
  export default class Timer extends React.Component {

    ...

    tick() {
      this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
    }

    ...
  }
  ```


  Cada componente de React puede almacenar su estado local via `this.state`. **State** es similar a las _props_, pero es privado y está completamente controlado por el componente. **El estado NO DEBE modificarse directamente**. En su lugar, siempre debe utilizar el método `this.setState ()` y devolver un nuevo estado.

   > **Nota:** La razón por la que no se muta el estado directamente es que una actualización de estado podría _potencialmente_ desencadenar una nueva ejecución del método `render ()`, redibujando el componente. Usando `this.setState()` React hará esta llamada junto con otros cálculos.

1. Por último, revisemos el código dentro de `componentDidMount()` y `componentWillUnmount()`. Este código se encarga de inicializar, ejecutar y limpiar el temporizador. Y mediante el uso de estos dos métodos integrados, React garantiza ejecutar este código cuando el componente se dibuja en el DOM ("mounted") y cuando se elimina ("unmounted").

   ```js
   export default class Timer extends React.Component {

     ...

     componentDidMount() {
       this.interval = setInterval(() => this.tick(), 1000);
     }

     componentWillUnmount() {
       clearInterval(this.interval);
     }

     ...
   }
   ```

   > **Nota** Si queres saber mas sobre state y ciclos de vida de un componentes, podes ver mas informacion [en la documentacion oficial](https://reactjs.org/docs/state-and-lifecycle.html)


1. Llegamos al último ejemplo de esta sección. Abri el ejemplo **Questionnaire** haciendo click [aquí](https://codesandbox.io/s/react-questionnaire-4che1).
1. Tomate unos minutos para analizar todas las piezas de código involucradas y la responsabilidad de cada una de ellas. Juga con las casillas de verificación y revisa los resultados.
1. Abri **Question.jsx** y **Answer.jsx**: Se puede ver que estos archivos modelan una función React (o un componente funcional React) que recibe diferentes _props_ y devuelve un resultado, modelado a través de JSX.

  ```js
  export default ({ question, value }) => (
    <p>
      <span>{`${question}: ${value}`}</span>
    </p>
  );
  ```

1. Abri **Questionnaire.jsx**. Mira los métodos utilizados al dibujar las diferentes partes del componente: las preguntas y las respuestas. Observe cómo organizamos toda la lógica de dibujo utilizando el método `render()`.

   > **Nota:** React Fragment es un "componente incorporado" (built-in) que se usa para agrupar (lógicamente) una lista de elementos secundarios sin agregar nodos adicionales al DOM. Si desea obtener más información al respecto, haga clic en [aquí](https://reactjs.org/docs/fragments.html)

1. Concentrémonos en el método `renderQuestions()` y localicemos la prop `onChange`. Pasamos a esta prop el método `this.handleQuestionChanged()` que actualizará la UI si se responde la pregunta. Y almacenará el valor en el estado del componente (Questionnaire).

  ```js
  export default class Questionnaire extends React.PureComponent {

    ...

    renderQuestions() {
      if (!questions.length) {
        return null;
      }

      return questions.map(question => (
        <Question
          key={question.id}
          id={question.id}
          text={question.text}
          checked={question.value}
          onChange={this.handleQuestionChanged}
        />
      ));
    }

  ...

  }
  ```

  Algo para destacar es que la forma en que manejamos la interaccion del usuario (a través de _"eventos"_) de una manera similar al código simple JS:

  - Todos los elementos JSX exponen un conjunto de eventos (ver todos los eventos compatibles [aquí](https://reactjs.org/docs/events.html#supported-events)).
  - Podemos _hookearnos_ a cada evento adjuntándole una función. De manera predeterminada, recibirá un objeto [SyntheticEvent](https://reactjs.org/docs/events.html) como primer argumento, pero [se puede cambiar](https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers).

#### Resumiendo

Al revisar estos ejemplos, aprendimos lo siguiente:

1. En React, usualmente usamos **JSX** para describir cómo debería ser la UI.
1. Para personalizar lo que generamos, podemos enviar **props** a nuestras funciones o componentes React.
1. React proporciona la clase **React.Component** para ayudar a encapsular nuestro código en componentes.
1. La salida de un método **render()** de un **React.Component** le dice al navegador lo que queremos dibujar.
1. Cada componente React podría tener su propio **state** para almacenar valores localmente.
1. Puede capturar las interacciones del usuario _hookeando_ una función o método de clase a un **evento JSX** .

  ![React events](./assets/images/react-events.png)

> **Nota:** Podes encontrar un conjunto completo de ejemplos, cada uno centrado en un solo concepto de React, en la [documentación oficial](https://reactjs.org/docs/hello-world.html).

## Seccion 2: Que agrega TypeScript

[TypeScript](https://www.typescriptlang.org/) es una libreria de código abierto desarrollada y mantenida por Microsoft para implementar aplicaciones a gran escala en entornos JavaScript. Se compila a JavaScript simple, que se ejecuta en cualquier navegador, en Node.js o en cualquier motor de JavaScript que admita [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) 3 (o más reciente).

En esencia, es un superconjunto sintáctico estricto de JavaScript que agrega tipado estático opcional al lenguaje **en el momento del desarrollo**.

Los principales beneficios de usar esta libreria son:

- Cuenta con verificación estática y refactorización de código y un amplio conjunto de herramientas y prácticas de desarrollo altamente productivas.
- Permite escribir código utilizando las últimas características y sintaxis de javascript, sin preocuparse por el soporte del navegador (porque se compilará en JS simple).
- No obliga a usar TypeScript: se puede escribir JavaScript si lo desea.
- Microsoft y Google lo mantienen. Y Angular lo usa.

![](./assets/images/typescript-intro.png)

### TypeScript en accion

Veamos cómo funciona TypeScript usando un ejemplo:

1. Abri el [playgorund de TypeScript](http://www.typescriptlang.org/play/). Este playground usa las mismas herramientas que el IDE de VSCode usa para interpretar el código.
1. En el menú desplegable ubicado a la izquierda de la página, seleccione la opción [Hello world](http://www.typescriptlang.org/play/?target=1&e=178#example/hello-world). Tomate un tiempo para leer detenidamente el código y comprender qué es TypeScript y qué hace. Si queres, continua con los otros ejemplos de la sección _JavaScript Essentials_.
1. Ahora abri el ejemplo [Classes 101](http://www.typescriptlang.org/play/?e=155#example/classes-101). Repasemos juntos:

  - En el panel izquierdo, hay código TypeScript que define la clase `Vendor` y un método para recibir clientes en la tienda, identificado por su nombre.
  - En el panel derecho, puede visualizar el equivalente de JavaScript, que se generó al transpilar el código TypeScript a ES2017. Este es el código que el navegador entiende y puede ejecutar.
  - De manera similar, hay un código TypeScript a la izquierda que define la clase `FoodTruck`, y un método para recibir nuevos clientes.

1. Ahora, coloque el mouse sobre la instanciación `FoodTruck` en la _linea 47_. Observe que el IDE muestra información sobre su constructor.

![](./assets/images/foodtruck-constructor.png)

1. Agregue un segundo argumento para crear una instancia de `FoodTruck`, por ejemplo `"asado"`. Abri la consola del desarrollador (o _Developer tools_) del navegador haciendo click derecho en la página (pero fuera del editor, por ejemplo en la barra de navegación azul en la parte superior). Luego, hace click en el botón **Run**. ¡Espera! Nuestro cambio no se muestra en la consola, eso no es justo. Para que funcione, agrega un `console.log(nameOnlyTruck.greet());` en _linea 48_ o reemplaza la _linea 54_ con la instancia de `nameOnlyTruck`. Y luego hace click de nuevo en **Run**.

  > **Note:** Cada navegador web moderno incluye un poderoso conjunto de herramientas para desarrolladores (Developer Tools) que ayudan a los desarrolladores a comprender lo que el navegador interpreta y encontrar posibles errores en el código (HTML, JavaScript o CSS). También le muestra métricas como el tiempo que tardó en cargar la página y cualquier otra solicitud que realizó (y está haciendo) el navegador. Si desea profundizar en esto, haga clic [aquí](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools).


1. Finalmente, reemplaza la palabra (string) `"asado"` con el número `1`. Ahora hay un error en el código que le dice que los números no están permitidos como argumentos del constructor. Tenga en cuenta que esto se muestra en TypeScript y no en JavaScript.

![](./assets/images/foodtruck-constructor-error.png)

Solucione el problema reemplazando el número `1` con un valor de string (como `"helado"`).

#### Resumiendo

Con este simple ejemplo, hemos aprendido que:

- El código TypeScript se puede compilar a un código JavaScript que cualquier navegador puede ejecutar.
- TypeScript permite definir tipos de la misma manera que lo hace un lenguaje fuertemente tipado. Puede encontrar sus especificaciones [aquí](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md).
- Todos los IDE modernos (VSCode, WebStorm, Atom, etc.) admiten TypeScript y pueden proporcionar sugerencias y mensajes de error, así como análisis estático (a través de [tslint](https://palantir.github.io/tslint/)).

> **Nota:** para obtener más información, consulte el manual de TypeScript [aquí](https://www.typescriptlang.org/docs/handbook/basic-types.html).

