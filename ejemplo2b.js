var jsonDatos = `{
    "pais": {
      "@nombre": "El Salvador",
      "modena": "dolar estadounidense",
      "codigoTel": "+503",
      "idiomas": "Español",
      "idiomasAutoctonos": "Nahuat, Poton, Pisbi",
      "departamento": [
        {
          "@id": "1",
          "@nombre": "San Salvador",
          "cabecera": "San Salvador",
          "habitantes": "1,700,000",
          "altura": "545 MSNM"
        },
        {
          "@id": "2",
          "@nombre": "La Libertad",
          "cabecera": "Santa tecla",
          "habitantes": "1,778,000",
          "altura": "30 MSNM"
        },
        {
          "@id": "3",
          "@nombre": "Cuscatlan",
          "cabecera": "Cojutepeque",
          "habitantes": "48,027",
          "altura": "849 MSNM"
        }
      ]
    }
  }`;

  var ejemplo2b = JSON.parse(jsonDatos);
