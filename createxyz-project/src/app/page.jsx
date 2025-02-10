"use client";
import React from "react";

function MainComponent() {
  const [selectedSize, setSelectedSize] = React.useState("FAMILIAR");
  const [selectedMenu, setSelectedMenu] = React.useState("PIZZAS");
  const [isZonesOpen, setIsZonesOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [selectedZone, setSelectedZone] = React.useState(null);
  const [halfPizza, setHalfPizza] = React.useState({
    first: null,
    second: null,
    extras: [],
  });
  const [extras, setExtras] = React.useState([]);
  const [clientInfo, setClientInfo] = React.useState({
    name: "",
    address: "",
    phone: "",
  });
  const [showCheckout, setShowCheckout] = React.useState(false);
  const extrasList = [
    { name: "Queijo Extra", price: 100 },
    { name: "Bacon Extra", price: 150 },
    { name: "Cebola Extra", price: 50 },
    { name: "Pimentão Extra", price: 50 },
    { name: "Cogumelos Extra", price: 100 },
    { name: "Azeitonas", price: 100 },
    { name: "Ovo", price: 50 },
    { name: "Catupiry", price: 150 },
    { name: "Cheddar", price: 150 },
    { name: "Milho", price: 50 },
    { name: "Salsicha", price: 100 },
    { name: "Palmito", price: 100 },
    { name: "Calabresa", price: 100 },
    { name: "Tomate", price: 50 },
    { name: "Ervilha", price: 50 },
  ];
  const pizzaMenu = [
    {
      name: "MARGUERITA",
      desc: "Queijo mussarela, gouda, oregano e molho tomate",
      prices: { FAMILIAR: 750, MEDIO: 700, PEQ: 450 },
    },
    {
      name: "4 QUEIJOS",
      desc: "Queijo mussarela, queijo azul, edem e fogo e molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "FIAMBRE",
      desc: "Fiambre, Queijo e molho tomate",
      prices: { FAMILIAR: 800, MEDIO: 750, PEQ: 500 },
    },
    {
      name: "FRANGO",
      desc: "Frango, queijo, molho tomate",
      prices: { FAMILIAR: 850, MEDIO: 800, PEQ: 550 },
    },
    {
      name: "CHOURIÇO",
      desc: "Chouriço Queijo e molho tomate",
      prices: { FAMILIAR: 800, MEDIO: 750, PEQ: 500 },
    },
    {
      name: "BACON",
      desc: "Bacon, queijo, molho tomate",
      prices: { FAMILIAR: 850, MEDIO: 800, PEQ: 550 },
    },
    {
      name: "PRESUNTO",
      desc: "Presunto, queijo, molho tomate",
      prices: { FAMILIAR: 850, MEDIO: 800, PEQ: 550 },
    },
    {
      name: "LINGUIÇA E QUEIJO DE TERRA",
      desc: "Linguiça, Queijo branco e molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "CARNE MOIDA",
      desc: "Chouriço Queijo e molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "ATUM",
      desc: "Atum, cebola, queijo, molho tomate",
      prices: { FAMILIAR: 800, MEDIO: 750, PEQ: 500 },
    },
    {
      name: "VEGETARIANO",
      desc: "Cebola,tomate,pimentão, cogumelo,queijo, molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "ESPECIAL DA CASA",
      desc: "Bacon, cogumelo, nata, queijo, molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "QUATRO ESTAÇÕES",
      desc: "Queijo e molho tomate cogumelo Fiambre Chouriço atum",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "TROPICAL",
      desc: "Frutas da época, queijo, molho tomate",
      prices: { FAMILIAR: 900, MEDIO: 850, PEQ: 600 },
    },
    {
      name: "MARISCO",
      desc: "Marisco, queijo, molho tomate",
      prices: { FAMILIAR: 1200, MEDIO: 1000 },
    },
    {
      name: "CAMARÃO",
      desc: "Camarão, queijo, molho tomate",
      prices: { FAMILIAR: 1200, MEDIO: 1000 },
    },
    {
      name: "MADÁ",
      desc: "Queijo, molho tomate, Chouriço, Bacon, Camarão e Ananás",
      prices: { FAMILIAR: 1400 },
    },
    {
      name: "CALZONE",
      desc: "Frango ou, Chouriço, Presunto, Cogumelo, Atum e Cebola (queijo e molho tomate)",
      prices: { FAMILIAR: 800 },
    },
  ];
  const drinkMenu = [
    {
      name: "ÁGUA",
      desc: "Água mineral",
      prices: { UN: 100 },
    },
    {
      name: "COCA-COLA",
      desc: "Refrigerante Coca-Cola",
      prices: { UN: 150 },
    },
    {
      name: "FANTA LARANJA",
      desc: "Refrigerante Fanta Laranja",
      prices: { UN: 150 },
    },
    {
      name: "CERVEJA",
      desc: "Cerveja local",
      prices: { UN: 200 },
    },
    {
      name: "SUMO NATURAL",
      desc: "Sumo natural da casa",
      prices: { UN: 200 },
    },
    {
      name: "VINHO TINTO",
      desc: "Vinho tinto da região",
      prices: { UN: 500 },
    },
  ];
  const deliveryZones = [
    { name: "Alto Glória", price: 200 },
    { name: "Achada Santo António", price: 200 },
    { name: "Achada São Filipe", price: 300 },
    { name: "Achada Grande Frente", price: 300 },
    { name: "Achada Grande Trás", price: 300 },
    { name: "Achada Eugênio Lima", price: 300 },
    { name: "Achada Limpo/Achada Mato", price: 300 },
    { name: "Achadinha", price: 200 },
    { name: "Achadinha Pires", price: 250 },
    { name: "Bairro Craveiro Lopes", price: 200 },
    { name: "Bela Vista", price: 150 },
    { name: "Campus Unicv", price: 250 },
    { name: "Cidadela", price: 200 },
    { name: "Cova Minhoto", price: 250 },
    { name: "Calabaceira", price: 250 },
    { name: "Coqueiro", price: 250 },
    { name: "Castelão", price: 250 },
    { name: "Fazenda", price: 200 },
    { name: "Zona Quelém", price: 150 },
    { name: "Quebra Canela", price: 200 },
    { name: "Fundo Cobom", price: 150 },
    { name: "Terra Branca", price: 50 },
    { name: "Tira Chapéu", price: 100 },
    { name: "Lém Ferreira", price: 200 },
    { name: "Monte Vermelho", price: 200 },
    { name: "Ponta Água", price: 250 },
    { name: "Pensamento", price: 250 },
    { name: "Palmarejo", price: 250 },
    { name: "Palmarejo Grande", price: 200 },
    { name: "Praia Negra", price: 200 },
    { name: "Plateau", price: 200 },
    { name: "Prainha", price: 200 },
    { name: "São Pedro Latada", price: 300 },
    { name: "Safende", price: 250 },
    { name: "Várzea", price: 150 },
    { name: "Vila Nova", price: 250 },
  ];
  const toggleHalfPizzaExtra = (extra) => {
    if (halfPizza.extras.find((e) => e.name === extra.name)) {
      setHalfPizza({
        ...halfPizza,
        extras: halfPizza.extras.filter((e) => e.name !== extra.name),
      });
    } else {
      setHalfPizza({
        ...halfPizza,
        extras: [...halfPizza.extras, extra],
      });
    }
  };
  const addHalfPizza = () => {
    if (halfPizza.first && halfPizza.second) {
      const basePrice = Math.max(
        halfPizza.first.prices[selectedSize] || 0,
        halfPizza.second.prices[selectedSize] || 0
      );
      const extrasCost = halfPizza.extras.reduce(
        (total, extra) => total + extra.price,
        0
      );

      setCart([
        ...cart,
        {
          name: `MEIO A MEIO (${halfPizza.first.name} / ${halfPizza.second.name})`,
          selectedSize,
          price: basePrice + extrasCost,
          extras:
            halfPizza.extras.length > 0 ? [...halfPizza.extras] : undefined,
          isHalfPizza: true,
        },
      ]);
      setHalfPizza({ first: null, second: null, extras: [] });
    }
  };
  const toggleExtra = (extra) => {
    if (extras.find((e) => e.name === extra.name)) {
      setExtras(extras.filter((e) => e.name !== extra.name));
    } else {
      setExtras([...extras, extra]);
    }
  };
  const addToCart = (item) => {
    const price = item.prices[selectedSize];
    if (price) {
      const extrasCost = extras.reduce(
        (total, extra) => total + extra.price,
        0
      );
      setCart([
        ...cart,
        {
          ...item,
          selectedSize,
          price: price + extrasCost,
          extras: extras.length > 0 ? [...extras] : undefined,
        },
      ]);
      setExtras([]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const getTotalPrice = () => {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const deliveryFee = selectedZone ? selectedZone.price : 0;
    const boxFee = cart.length > 0 ? 100 : 0;
    return subtotal + deliveryFee + boxFee;
  };
  const handlePrint = () => {
    const printContent = `
      KANTINHO DELÍCIA PIZZARIA
      ========================
      Cliente: ${clientInfo.name}
      Telefone: ${clientInfo.phone}
      Endereço: ${clientInfo.address}  
      Zona: ${selectedZone?.name || "-"}
      ========================
      PEDIDO:
      ${cart
        .map(
          (item) => `
      ${item.name} (${item.selectedSize})
      ${
        item.extras
          ? `Extras: ${item.extras.map((e) => e.name).join(", ")}\n`
          : ""
      }
      ${item.price}$00
      `
        )
        .join("\n")}
      ========================
      Subtotal: ${getTotalPrice() - (selectedZone?.price || 0) - 100}$00
      Taxa de entrega: ${selectedZone?.price || 0}$00
      Taxa de caixa: 100$00
      ========================
      TOTAL: ${getTotalPrice()}$00
    `;

    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write(`
      <pre style="font-family: monospace; white-space: pre-wrap;">
        ${printContent}
      </pre>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-2 md:p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-4 md:mb-8">
          <div className="flex justify-center mb-4">
            <i className="fas fa-pizza-slice text-5xl md:text-7xl text-red-600"></i>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 font-crimson-text">
            KANTINHO DELÍCIA
          </h1>
          <div className="flex justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <i className="fab fa-instagram text-2xl md:text-3xl"></i>
            </div>
            <div className="flex items-center gap-2">
              <i className="fab fa-facebook text-2xl md:text-3xl"></i>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-base md:text-lg">
            <span>
              <i className="fas fa-phone-alt mr-2"></i>FIXO: 2616090
            </span>
            <span>
              <i className="fas fa-mobile-alt mr-2"></i>SWAG: 5999204
            </span>
            <span>
              <i className="fas fa-phone mr-2"></i>PLAY: 9352262
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-8">
          {["PIZZAS", "BEBIDAS", "ZONAS", "CONFIGURAÇÕES"].map((menu) => (
            <button
              key={menu}
              onClick={() => {
                setSelectedMenu(menu);
                if (menu === "PIZZAS") {
                  setSelectedSize("FAMILIAR");
                  setIsZonesOpen(false);
                } else if (menu === "BEBIDAS") {
                  setSelectedSize("UN");
                  setIsZonesOpen(false);
                } else if (menu === "ZONAS") {
                  setIsZonesOpen(true);
                }
              }}
              className={`
                px-4 md:px-6 py-2 rounded-full text-base md:text-lg
                transition duration-300 ease-in-out flex items-center gap-2
                ${
                  selectedMenu === menu
                    ? "bg-red-600 scale-105 shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600"
                }
              `}
            >
              <i
                className={`fas ${
                  menu === "PIZZAS"
                    ? "fa-pizza-slice"
                    : menu === "BEBIDAS"
                    ? "fa-glass-martini-alt"
                    : menu === "ZONAS"
                    ? "fa-map-marker-alt"
                    : "fa-cog"
                }`}
              ></i>
              {menu}
            </button>
          ))}
        </div>

        {selectedMenu === "PIZZAS" && (
          <div className="flex justify-center gap-2 mb-8">
            {["FAMILIAR", "MEDIO", "PEQ"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  px-3 py-1 rounded-full text-sm
                  transition duration-300 ease-in-out flex items-center gap-2
                  ${
                    selectedSize === size
                      ? "bg-red-600 scale-105 shadow-lg"
                      : "bg-gray-700 hover:bg-gray-600"
                  }
                `}
              >
                <i
                  className={`fas ${
                    size === "FAMILIAR"
                      ? "fa-users"
                      : size === "MEDIO"
                      ? "fa-user-friends"
                      : "fa-user"
                  }`}
                ></i>
                {size}
              </button>
            ))}
          </div>
        )}

        {isZonesOpen ? (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2">
            {deliveryZones.map((zone, index) => (
              <div
                key={index}
                className="bg-gray-800 p-3 rounded-lg flex justify-between items-center hover:bg-gray-700 transition duration-300"
              >
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-red-500"></i>
                  <span>{zone.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-money-bill-wave text-green-500"></i>
                  <span className="font-bold">{zone.price}$00</span>
                </div>
              </div>
            ))}
          </div>
        ) : showCheckout ? (
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                <i className="fas fa-user-circle mr-2"></i>
                Dados do Cliente
              </h2>
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="w-full p-2 rounded bg-gray-700"
                  value={clientInfo.name}
                  onChange={(e) =>
                    setClientInfo({ ...clientInfo, name: e.target.value })
                  }
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  className="w-full p-2 rounded bg-gray-700"
                  value={clientInfo.phone}
                  onChange={(e) =>
                    setClientInfo({ ...clientInfo, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço"
                  className="w-full p-2 rounded bg-gray-700"
                  value={clientInfo.address}
                  onChange={(e) =>
                    setClientInfo({ ...clientInfo, address: e.target.value })
                  }
                />
                <select
                  className="w-full p-2 rounded bg-gray-700"
                  value={selectedZone?.name || ""}
                  onChange={(e) =>
                    setSelectedZone(
                      deliveryZones.find((zone) => zone.name === e.target.value)
                    )
                  }
                >
                  <option value="">Selecione a zona</option>
                  {deliveryZones.map((zone) => (
                    <option key={zone.name} value={zone.name}>
                      {zone.name} - {zone.price}$00
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                <i className="fas fa-shopping-cart mr-2"></i>
                Pedido
              </h2>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <div>
                    <span className="font-bold">{item.name}</span>
                    <span className="text-sm text-gray-400">
                      {" "}
                      ({item.selectedSize})
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{item.price}$00</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>
                    {getTotalPrice() - (selectedZone?.price || 0) - 100}$00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de entrega:</span>
                  <span>{selectedZone?.price || 0}$00</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de caixa:</span>
                  <span>100$00</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-2">
                  <span>Total:</span>
                  <span>{getTotalPrice()}$00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowCheckout(false)}
                className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 flex items-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Voltar
              </button>
              <button
                onClick={handlePrint}
                disabled={
                  !clientInfo.name ||
                  !clientInfo.phone ||
                  !selectedZone ||
                  cart.length === 0
                }
                className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <i className="fas fa-print"></i>
                Imprimir Pedido
              </button>
            </div>
          </div>
        ) : selectedMenu === "CONFIGURAÇÕES" ? (
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                <i className="fas fa-tools mr-2"></i>
                Configurações do Sistema
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <i className="fas fa-store mr-2"></i>
                      Informações Básicas
                    </h3>
                    <input
                      type="text"
                      placeholder="Nome da Pizzaria"
                      className="w-full p-2 rounded bg-gray-700"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <i className="fas fa-clock mr-2"></i>
                      Horário de Funcionamento
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm mb-1">Abertura</label>
                        <input
                          type="time"
                          className="w-full p-2 rounded bg-gray-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Fechamento</label>
                        <input
                          type="time"
                          className="w-full p-2 rounded bg-gray-700"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <i className="fas fa-phone-alt mr-2"></i>
                      Telefones
                    </h3>
                    <div className="space-y-2">
                      <input
                        type="tel"
                        placeholder="Telefone Fixo"
                        className="w-full p-2 rounded bg-gray-700"
                      />
                      <input
                        type="tel"
                        placeholder="Celular Principal"
                        className="w-full p-2 rounded bg-gray-700"
                      />
                      <input
                        type="tel"
                        placeholder="Celular Secundário"
                        className="w-full p-2 rounded bg-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <i className="fas fa-money-bill mr-2"></i>
                      Taxas e Valores
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Taxa de Caixa"
                          className="flex-1 p-2 rounded bg-gray-700"
                        />
                        <span>$00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Taxa Mínima de Entrega"
                          className="flex-1 p-2 rounded bg-gray-700"
                        />
                        <span>$00</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2 flex items-center">
                      <i className="fas fa-hashtag mr-2"></i>
                      Redes Sociais
                    </h3>
                    <div className="space-y-2">
                      <div className="relative">
                        <i className="fab fa-instagram absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Instagram"
                          className="w-full p-2 pl-10 rounded bg-gray-700"
                        />
                      </div>
                      <div className="relative">
                        <i className="fab fa-facebook absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Facebook"
                          className="w-full p-2 pl-10 rounded bg-gray-700"
                        />
                      </div>
                      <div className="relative">
                        <i className="fab fa-whatsapp absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="WhatsApp"
                          className="w-full p-2 pl-10 rounded bg-gray-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-box mr-2"></i>
                    Impressão do Pedido
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-gray-700"
                        />
                        <span>Incluir Logo</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-gray-700"
                        />
                        <span>Incluir QR Code PIX</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-gray-700"
                        />
                        <span>Imprimir em Duas Vias</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-gray-700"
                        />
                        <span>Incluir Mensagem Personalizada</span>
                      </label>
                    </div>
                  </div>
                  <textarea
                    placeholder="Mensagem de Agradecimento (opcional)"
                    className="w-full mt-4 p-2 rounded bg-gray-700 h-20"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button className="px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 flex items-center gap-2">
                    <i className="fas fa-undo"></i>
                    Restaurar Padrão
                  </button>
                  <button className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-500 flex items-center gap-2">
                    <i className="fas fa-save"></i>
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                <i className="fas fa-shopping-cart mr-2"></i>
                Carrinho ({cart.length})
              </span>
              {cart.length > 0 && (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full md:w-auto px-4 py-2 bg-red-600 rounded-full hover:bg-red-500 flex items-center justify-center gap-2 text-lg"
                >
                  <i className="fas fa-check"></i>
                  Finalizar Pedido
                </button>
              )}
            </div>
            {selectedMenu === "PIZZAS" && (
              <div className="mb-6 bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Pizza Meio a Meio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Primeiro Sabor:</label>
                    <select
                      className="w-full p-2 rounded bg-gray-700"
                      value={halfPizza.first?.name || ""}
                      onChange={(e) =>
                        setHalfPizza({
                          ...halfPizza,
                          first: pizzaMenu.find(
                            (p) => p.name === e.target.value
                          ),
                        })
                      }
                    >
                      <option value="">Selecione um sabor</option>
                      {pizzaMenu.map((pizza) => (
                        <option key={pizza.name} value={pizza.name}>
                          {pizza.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">Segundo Sabor:</label>
                    <select
                      className="w-full p-2 rounded bg-gray-700"
                      value={halfPizza.second?.name || ""}
                      onChange={(e) =>
                        setHalfPizza({
                          ...halfPizza,
                          second: pizzaMenu.find(
                            (p) => p.name === e.target.value
                          ),
                        })
                      }
                    >
                      <option value="">Selecione um sabor</option>
                      {pizzaMenu.map((pizza) => (
                        <option key={pizza.name} value={pizza.name}>
                          {pizza.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {(halfPizza.first || halfPizza.second) && (
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">
                      Extras para Pizza Meio a Meio:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {extrasList.map((extra) => (
                        <button
                          key={extra.name}
                          onClick={() => toggleHalfPizzaExtra(extra)}
                          className={`p-2 rounded-lg text-sm ${
                            halfPizza.extras.find((e) => e.name === extra.name)
                              ? "bg-red-600"
                              : "bg-gray-700 hover:bg-gray-600"
                          }`}
                        >
                          {extra.name} (+{extra.price}$00)
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {halfPizza.first && halfPizza.second && (
                  <button
                    onClick={addHalfPizza}
                    className="mt-4 w-full px-4 py-2 bg-red-600 rounded-full hover:bg-red-500"
                  >
                    Adicionar Pizza Meio a Meio ao Carrinho
                    {halfPizza.extras.length > 0 && (
                      <span className="text-sm ml-2">
                        (+
                        {halfPizza.extras.reduce(
                          (total, extra) => total + extra.price,
                          0
                        )}
                        $00 em extras)
                      </span>
                    )}
                  </button>
                )}
              </div>
            )}

            {selectedMenu === "PIZZAS" && (
              <div className="mb-6 bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Extras para Pizza Inteira
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {extrasList.map((extra) => (
                    <button
                      key={extra.name}
                      onClick={() => toggleExtra(extra)}
                      className={`p-2 rounded-lg text-sm ${
                        extras.find((e) => e.name === extra.name)
                          ? "bg-red-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {extra.name} (+{extra.price}$00)
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {(selectedMenu === "PIZZAS" ? pizzaMenu : drinkMenu).map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-700 transition duration-300"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                        <i
                          className={`fas ${
                            selectedMenu === "PIZZAS"
                              ? "fa-pizza-slice"
                              : "fa-glass-martini-alt"
                          }`}
                        ></i>
                        {item.name}
                        {extras.length > 0 && selectedMenu === "PIZZAS" && (
                          <span className="text-sm text-red-500">
                            (+
                            {extras.reduce(
                              (total, extra) => total + extra.price,
                              0
                            )}
                            $00 em extras)
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full md:w-auto">
                      <div className="text-xl md:text-2xl font-bold w-full md:w-auto text-center">
                        {item.prices[selectedSize]
                          ? `${item.prices[selectedSize]}$00`
                          : "-"}
                      </div>
                      {item.prices[selectedSize] && (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full md:w-auto px-4 py-2 bg-red-600 rounded-full hover:bg-red-500 text-base flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-cart-plus"></i>
                          Adicionar
                        </button>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            {selectedMenu === "PIZZAS"
              ? "OBS: A ESSES VALORES SERÃO ACRECENTADOS 100$00 DE CAIXA MAIS TAXA DE ENTREGA (DEPENDE DA ZONA)"
              : selectedMenu === "BEBIDAS"
              ? "PREÇOS POR UNIDADE"
              : "TAXAS DE ENTREGA POR ZONA"}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <i className="fab fa-cc-paypal text-2xl"></i>
            <i className="fab fa-cc-master" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;