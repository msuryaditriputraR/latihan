const pilihansRadio = document.querySelectorAll("[name=bangun-datar]");
const parentsInputan = document.querySelectorAll(".inputan");

const formBangunDatar = document.getElementById("form-bangun-datar");
const hasilText = document.querySelector(".hasil-luas-bangun-datar");
const hasilBangunDatar = document.querySelector(".hasil-bangun-datar");

const parentInputanPersegi = document.querySelector(".persegi");
const parentInputanPersegiPJG = document.querySelector(".persegi-panjang");
const parentInputanLingkaran = document.querySelector(".lingkaran");

pilihansRadio.forEach(function (pilihan) {
    pilihan.addEventListener("change", function () {
        switch (this.id) {
            case "persegi":
                parentsInputan.forEach((pi) => pi.classList.add("hide"));
                parentInputanPersegi.classList.remove("hide");
                break;
            case "persegi-panjang":
                parentsInputan.forEach((pi) => pi.classList.add("hide"));
                parentInputanPersegiPJG.classList.remove("hide");
                break;
            case "lingkaran":
                parentsInputan.forEach((pi) => pi.classList.add("hide"));
                parentInputanLingkaran.classList.remove("hide");
                break;
            default:
        }
    });
});

formBangunDatar.addEventListener("submit", function (e) {
    e.preventDefault();

    pilihansRadio.forEach((pr) => {
        if (pr.checked) {
            switch (pr.id) {
                case "persegi":
                    const inputanSisi = document.querySelector("#sisi");
                    const valueSisi = Number(inputanSisi.value);

                    hasilBangunDatar.style.width = valueSisi + "px";
                    hasilBangunDatar.style.height = valueSisi + "px";
                    hasilBangunDatar.classList.remove("lingkaran");

                    const luasPersegi = hitungLuasPersegi(valueSisi);
                    hasilText.textContent = `Luas Persegi = ${luasPersegi}`;
                    break;
                case "persegi-panjang":
                    const inputanPanjang = document.querySelector("#panjang");
                    const valuePanjang = Number(inputanPanjang.value);
                    const inputanLebar = document.querySelector("#lebar");
                    const valueLebar = Number(inputanLebar.value);

                    hasilBangunDatar.style.width = valueLebar + "px";
                    hasilBangunDatar.style.height = valuePanjang + "px";
                    hasilBangunDatar.classList.remove("lingkaran");

                    const luasPersegiPanjang = hitungLuasPersegiPanjang(
                        valuePanjang,
                        valueLebar
                    );
                    hasilText.textContent = `Luas Persegi = ${luasPersegiPanjang}`;
                    break;
                case "lingkaran":
                    const inputanR = document.querySelector("#jari-jari");
                    const valueR = Number(inputanR.value);

                    hasilBangunDatar.style.width = valueR * 2 + "px";
                    hasilBangunDatar.style.height = valueR * 2 + "px";
                    hasilBangunDatar.classList.add("lingkaran");

                    const luasLingkaran = hitungLuasLingkaran(valueR);
                    hasilText.textContent = `Luas Persegi = ${luasLingkaran}`;
                    break;
                default:
            }
        }
    });
});

function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
function hitungLuasLingkaran(r) {
    return 3.14 * r * r;
}
