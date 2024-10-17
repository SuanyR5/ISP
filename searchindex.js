// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "SUANY ROSALES", "We are getting married  08-02-2016  \"Hoy comienza el capítulo más hermoso de nuestra vida Después de tantas risas,  aventuras y momentos compartidos, hemos decidido dar el siguiente paso enste  viaje juntos  casarnos Sentimos una felicidad inmensa al mirar hacia el futuro,  sabiendo que nos tenemos el uno al otro para seguir creciendo, aprendiendo y  amándonos cada día más.diam Sed nisi Nulla quis sem at nibh  La pareja feliz  Nos sentimos increíblemente afortunados de tenernos el uno al otro, y aún más  agradecidos de contar con personas tan especiales como ustedes en nuestras vidas Cada  uno de ustedes ha sido parte de nuestra historia de una manera única, y no podemos  esperar a celebrar este día tan especial rodeados de amor, alegría y buenos momentos  Hernan Bullock  Con una sonrisa siempre lista y un corazón generoso,  Nombre del novio es el tipo  de persona que ilumina cualquier habitación con su presencia Amante de la  aventura y apasionado por  mencionar alguna afición o hobby, como la música, el  deporte   MARIA SUAREZ  Con una risa contagiosa y un espíritu cálido,  Nombre de la novia  ha logrado tocar  los corazones de quienes la rodean con su amabilidad y alegría Apasionada pormencionar alguna afición o hobby, como la lectura, la cocina, la naturaleza, etc ,  siempre ha creído en el poder del amor y la conexión verdadera  Getting Married Soon  El viaje que hemos recorrido hasta aquí ha sido increíble, y no podemos esperar a  celebrar nuestro amor con todos aquellos que han sido parte de nuestra historia La  fecha se acerca, y estamos emocionados por compartir con ustedes el día más  especial de nuestras vidas  Our Special Events  Estamos emocionados de compartir con ustedes que el día más esperado de  nuestras vidas está por llegar El  día de la semana ,  fecha , celebramos el comienzo  de una nueva aventura como marido y mujer, y no podemos esperar a hacerlo  rodeados de nuestros seres más queridos  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh  ALBUM GALLERY  Nos sentimos increíblemente afortunados de tenernos el uno al otro, y aún más  agradecidos de contar con personas tan especiales como ustedes en nuestras vidas Cada  uno de ustedes ha sido parte de nuestra historia de una manera única, y no podemos  esperar a celebrar este día tan especial rodeados de amor, alegría   Contactos  Hernan y Maria   ", "");
   this[database_length++] = new SearchPage("page1.html", "Página sin título", " ", "");
   return this;
}
