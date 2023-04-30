module.exports=function(){
  var data={
    chats: [
      {
        id: 1,
        mensaje_estudiante: "buenas tardes profesora",
        mensaje_tutor: "buenas tardes alumno",
        fecha_envio: "2023-04-12T17:30:45.000Z",
        fecha_recepcion: "2023-04-12T17:30:46.000Z",
      },
      {
        id: 2,
        mensaje_estudiante: "Buenas tardes",
        mensaje_tutor: "buenas tardes delegado",
        fecha_envio: "2023-04-12T17:28:40.000Z",
        fecha_recepcion: "2023-04-12T17:28:41.000Z",
      },
      {
        id: 3,
        mensaje_estudiante: "le envie un correo ayer",
        mensaje_tutor: "si me llego tu correo",
        fecha_envio: "2023-04-12T17:30:23.000Z",
        fecha_recepcion: "2023-04-12T17:30:24.000Z",
      },
      {
        id: 4,
        mensaje_estudiante: "estoy emocionado por los temas de hoy",
        mensaje_tutor: "Exacto hoy la clase sera muy dinamica",
        fecha_envio: "2023-04-12T17:32:12.000Z",
        fecha_recepcion: "2023-04-12T17:32:13.000Z",
      },
    ],
  users: [
    {
      id:1,
      rol: "Tutor",
      nombre_completo: "Luis Miguel Fernando Morote",
      correo_electronico: "FernandoM@gmail.com",
      contrasena: "2ekfwfj",
    },
    {
      id:2,
      rol: "Tutor",
      nombre_completo: "Maria Montenegro Rosal",
      correo_electronico: "MontenegroR@gmail.com",
      contrasena: "adffw223j",
    },
    {
      id:3,
      rol: "Estudiante",
      nombre_completo: "Manuel Robreto Rodriguez",
      correo_electronico: "RobertoR@gmail.com",
      contrasena: "ldkfsl",
    },
    {
      id:4,
      rol: "Estudiante",
      nombre_completo: "Allison Jimenez Zorrilla",
      correo_electronico: "Jimenez@gmail.com",
      contrasena: "34xerw",
    },
  ],
  memberships: [
    {
      id: 1,
      monto_pago: 50,
      beneficios: "Descuento del 20%",
      metodo_de_pago: "Tarjeta Crédito",
    },
    {
      id: 2,
      monto_pago: 100,
      beneficios: "3 Simulaciones",
      metodo_de_pago: "efectivo",
    },
    {
      id: 3,
      monto_pago: 80,
      beneficios: "Simulaciones ilimitadas",
      metodo_de_pago: "Tarjeta Débito",
    },
    {
      id: 4,
      monto_pago: 85,
      beneficios: "Descuento 10%",
      metodo_de_pago: "Paypal",
    },
  ],
  simulations:[
          {
              id:1,
              nameCurso: "Matematica Básica",
              planCurso: "Consta de 2 exámenes que deberán ser aprobatorios con 100%",
              metodologiaCurso: "Curso de la facultad de Ingeniería",
              duracionHoras: "6",
          },
          {
              id:2,
              nameCurso: "Estadistica Aplicada",
              planCurso: "Consta de 4 exámenes que deberán ser aprobatorios con 80%",
              metodologiaCurso: "Ver https://www.youtube.com/@estadisticaupc7353 ",
              duracionHoras: "8",
          },
          {
              id:3,
              nameCurso: "Fisica I",
              planCurso: "Consta 3 exámenes que deberán ser aprobatorios mayor a 80%",
              metodologiaCurso: "Ver https://www.youtube.com/@OpenFINGdirectos  ",
              duracionHoras: "9",
          },
          {
              id:4,
              nameCurso: "Contabilidad y Presupuesto",
              planCurso: "Consta 2 exámenes que deberán ser aprobatorios con 100%",
              metodologiaCurso: "Ver https://www.youtube.com/watch?v=1CbtTuWF070&list=PLWeOo6B44EG7bZmwjAPEpcoqGw_8OKDxf",
              duracionHoras: "6",
          },
      ],
  students:[
        {
            id:1,
            colegio: "Bertolt Brecht",
            edad: "17",
            users_user_id: "1",
            membresia_id: "1",
            sala_id: "100",
        },
        {
            id:2,
            colegio: "Bertolt Brecht",
            edad: "17",
            users_user_id: "2",
            membresia_id: "2",
            sala_id: "101",
        },
        {
            id:3,
            colegio: "Bertolt Brecht",
            edad: "17",
            users_user_id: "3",
            membresia_id: "3",
            sala_id: "103",
        },
        {
            id:4,
            colegio: "Bertolt Brecht",
            edad: "17",
            users_user_id: "4",
            membresia_id: "4",
            sala_id: "104",
        },
    ]
  }
  return data
}
