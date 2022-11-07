const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(` listening on port ${port}!`));

app.post("/kubus", (req, res) => {
  let sisi = Number(req.body.sisi);
  let lp = 6 * sisi * sisi;
  let volume = sisi * sisi * sisi;
  let response = {
    sisi: sisi,
    luasPermukaan: lp,
    volume: volume,
  };
  res.json(response);
});

app.post("/balok", (req, res) => {
  let p = Number(req.body.panjang);
  let l = Number(req.body.lebar);
  let t = Number(req.body.tinggi);
  let lp = 2 * (p * l + l * t + p * t);
  let volume = p * l * t;
  let response = {
    panjang: p,
    lebar: l,
    tinggi: t,
    luasPermukaan: lp,
    volume: volume,
  };
  res.json(response);
});

app.post("/bola", (req, res) => {
  let r = Number(req.body.jariJari);
  let lp = 4 * 3.14 * r * r;
  let volume = (4 / 3) * 3.14 * r * r * r;
  let response = {
    jariJari: r,
    luasPermukaan: lp,
    volume: volume,
  };
  res.json(response);
});

app.post("/kerucut", (req, res) => {
  let r = Number(req.body.jariJari);
  let S = Number(req.body.sisiMiring);
  let t = Number(req.body.tinggi);
  let lp = 3.14 * r * (r + S);
  let volume = (1 / 3) * 3.14 * r * r * t;
  let response = {
    jariJari: r,
    sisiMiring: S,
    tinggi: t,
    luasPermukaan: lp,
    volume: volume,
  };
  res.json(response);
});

app.get("/convert/celcius/:num", (req, res) => {
  const num = Number(req.params.num);
  const resultR = (num * 4) / 5;
  const resultK = num + 273;
  const resultF = (num * 9) / 5 + 32;
  res.json({
    celcius: num,
    result: { reamur: resultR, kelvin: resultK, fahrenheit: resultF },
  });
});
app.get("/convert/reamur/:num", (req, res) => {
  const num = Number(req.params.num);
  const resultC = (num * 5) / 4;
  const resultK = (num * 5) / 4 + 273;
  const resultF = (num * 9) / 4 + 32;
  res.json({
    celcius: num,
    result: { celcius: resultC, kelvin: resultK, fahrenheit: resultF },
  });
});
app.get("/convert/kelvin/:num", (req, res) => {
  const num = Number(req.params.num);
  const resultR = ((num - 273) * 4) / 5;
  const resultC = num - 273;
  const resultF = ((num - 273) * 9) / 5 + 32;
  res.json({
    celcius: num,
    result: { reamur: resultR, celcius: resultC, fahrenheit: resultF },
  });
});
app.get("/convert/fahrenheit/:num", (req, res) => {
  const num = Number(req.params.num);
  const resultR = ((num - 32) * 4) / 9;
  const resultK = ((num - 32) * 5) / 9 + 273;
  const resultC = ((num - 32) * 5) / 9;
  res.json({
    celcius: num,
    result: { reamur: resultR, kelvin: resultK, celcius: resultC },
  });
});

app.post("/desimal", (req, res) => {
  let d = Number(req.body.angka);
  let b = d.toString(2);
  let o = d.toString(8);
  let h = d.toString(16).toUpperCase();
  let response = {
    desimal: d,
    result: {
      biner: b,
      oktal: o,
      hexadesimal: h,
    },
  };
  res.json(response);
});

app.post("/biner", (req, res) => {
  let biner = Number(req.body.angka);
  let d = parseInt(biner, 2);
  let o = parseInt(biner, 2).toString(8);
  let h = parseInt(biner, 2).toString(16).toUpperCase();
  let response = {
    biner: biner,
    result: {
      desimal: d,
      oktal: o,
      hexadesimal: h,
    },
  };
  res.json(response);
});

app.post("/oktal", (req, res) => {
  let octal = Number(req.body.angka);
  let d = parseInt(octal, 8).toString(10);
  let b = parseInt(octal, 8).toString(2);
  let h = parseInt(octal, 8).toString(16).toUpperCase();
  let response = {
    oktal: octal,
    result: {
      desimal: d,
      biner: b,
      hexadesimal: h,
    },
  };
  res.json(response);
});

app.post("/hexadesimal", (req, res) => {
  let hexadecimal = req.body.angka;
  let d = parseInt(hexadecimal, 16).toString(10);
  let b = parseInt(hexadecimal, 16).toString(2);
  let o = parseInt(hexadecimal, 16).toString(8);
  let response = {
    hexadesimal: hexadecimal,
    result: {
      desimal: d,
      biner: b,
      oktal: o,
    },
  };
  res.json(response);
});

app.post("/bmi", (req, res) => {
  let tinggi = Number(req.body.tinggi);
  let berat = Number(req.body.berat);
  let bmi = berat / (tinggi * tinggi);
  let status = "";
  if (bmi < 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal (Ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Kegemukan (Obesitas)";
  }

  let response = {
    tinggi: tinggi,
    berat: berat,
    bmi: bmi,
    status: status,
  };
  res.json(response);
});

// Tugas tambahan nomor 5
app.post("/bilangan", (req, res) => {
  let nilai = Number(req.body.nilai);
  let status = "";
  if (nilai % 2 == 0) {
    status = "genap";
  } else if (nilai % 2 == 1) {
    status = "ganjil";
  }
  let response = {
    nilai: nilai,
    status: status,
  };
  res.json(response);
});
