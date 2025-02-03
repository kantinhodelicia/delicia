document.addEventListener('DOMContentLoaded', () => {
  const customerModal = document.getElementById('customer-modal');
  const openCustomerModalBtn = document.getElementById('customer-btn');
  const closeCustomerModalBtn = document.querySelector('.customer-close');
  const addCustomerForm = document.getElementById('add-customer-form');
  const customerListBody = document.getElementById('customer-list-body');
  
  // Add zone management
  const zonesListBody = document.getElementById('zones-list-body');
  const addZoneForm = document.getElementById('add-zone-form');

  // Predefined zones with their details
  const predefinedZones = [
    { name: "Alto Glória", deliveryFee: 200 },
    { name: "Achada Santo António", deliveryFee: 200 },
    { name: "Achada São Filipe", deliveryFee: 300 },
    { name: "Achada Grande Frente", deliveryFee: 300 },
    { name: "Achada Grande Trás", deliveryFee: 300 },
    { name: "Achada Eugênio Lima", deliveryFee: 200 },
    { name: "Achada Limpo/Achada Mato", deliveryFee: 300 },
    { name: "Achadinha", deliveryFee: 200 },
    { name: "Achadinha Pires", deliveryFee: 250 },
    { name: "Bairro Craveiro Lopes", deliveryFee: 200 },
    { name: "Bela Vista", deliveryFee: 150 },
    { name: "Campus Unicv", deliveryFee: 250 },
    { name: "Cidadela", deliveryFee: 200 },
    { name: "Cova Minhoto", deliveryFee: 250 },
    { name: "Calabaceira", deliveryFee: 250 },
    { name: "Coqueiro", deliveryFee: 250 },
    { name: "Castelão", deliveryFee: 250 },
    { name: "Fazenda", deliveryFee: 200 },
    { name: "Zona Quelém", deliveryFee: 150 },
    { name: "Quebra Canela", deliveryFee: 200 },
    { name: "Fundo Cobom", deliveryFee: 150 },
    { name: "Terra Branca", deliveryFee: 0 },
    { name: "Tira Chapéu", deliveryFee: 100 },
    { name: "Lém Ferreira", deliveryFee: 200 },
    { name: "Monte Vermelho", deliveryFee: 200 },
    { name: "Ponta Agua", deliveryFee: 250 },
    { name: "Pensamento", deliveryFee: 250 },
    { name: "Palmarejo", deliveryFee: 200 },
    { name: "Palmarejo Grande", deliveryFee: 200 },
    { name: "Praia Negra", deliveryFee: 200 },
    { name: "Plateau", deliveryFee: 200 },
    { name: "Prainha", deliveryFee: 200 },
    { name: "São Pedro Latada", deliveryFee: 300 },
    { name: "Safende", deliveryFee: 250 },
    { name: "Várzea", deliveryFee: 150 },
    { name: "Vila Nova", deliveryFee: 250 }
  ];

  // Customer data storage
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  
  // Zone data storage
  let zones = JSON.parse(localStorage.getItem('zones')) || predefinedZones;

  // Function to render customer list
  function renderCustomerList() {
    customerListBody.innerHTML = '';
    customers.forEach((customer, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.address}</td>
        <td>${customer.zone || 'Não especificado'}</td>
        <td>
          <button onclick="editCustomer(${index})">Editar</button>
          <button onclick="deleteCustomer(${index})">Excluir</button>
        </td>
      `;
      customerListBody.appendChild(row);
    });
  }

  // Function to render zones list
  function renderZonesList() {
    zonesListBody.innerHTML = '';
    zones.forEach((zone, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${zone.name}</td>
        <td>${zone.description || 'Não especificado'}</td>
        <td>${zone.deliveryFee}$00</td>
        <td>
          <button onclick="editZone(${index})">Editar</button>
          <button onclick="deleteZone(${index})">Excluir</button>
        </td>
      `;
      zonesListBody.appendChild(row);
    });

    // Update zone select in customer and delivery forms
    const customerZoneSelect = document.getElementById('customer-zone');
    const deliveryZoneSelect = document.getElementById('delivery-zone');
    
    [customerZoneSelect, deliveryZoneSelect].forEach(select => {
      select.innerHTML = '<option value="">Selecione uma Zona</option>';
      zones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone.name;
        option.textContent = `${zone.name} (${zone.deliveryFee}$00)`;
        select.appendChild(option);
      });
    });
  }

  // Function to add a new customer
  function addCustomer(event) {
    event.preventDefault();
    
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const email = document.getElementById('customer-email').value;
    const address = document.getElementById('customer-address').value;
    const zone = document.getElementById('customer-zone').value;

    if (!name || !phone) {
      alert('Nome e telefone são obrigatórios.');
      return;
    }

    const newCustomer = { name, phone, email, address, zone };
    customers.push(newCustomer);
    
    // Save to local storage
    localStorage.setItem('customers', JSON.stringify(customers));
    
    // Clear form
    addCustomerForm.reset();
    
    // Render updated list
    renderCustomerList();
  }

  // Function to add a new zone
  function addZone(event) {
    event.preventDefault();
    
    const name = document.getElementById('zone-name').value;
    const description = document.getElementById('zone-description').value;
    const deliveryFee = document.getElementById('zone-delivery-fee').value;

    if (!name) {
      alert('Nome da zona é obrigatório.');
      return;
    }

    const newZone = { name, description, deliveryFee: parseFloat(deliveryFee) };
    zones.push(newZone);
    
    // Save to local storage
    localStorage.setItem('zones', JSON.stringify(zones));
    
    // Clear form
    document.getElementById('add-zone-form').reset();
    
    // Render updated list
    renderZonesList();
  }

  // Expose edit customer function globally
  window.editCustomer = function(index) {
    const customer = customers[index];
    
    document.getElementById('customer-name').value = customer.name;
    document.getElementById('customer-phone').value = customer.phone;
    document.getElementById('customer-email').value = customer.email;
    document.getElementById('customer-address').value = customer.address;
    document.getElementById('customer-zone').value = customer.zone || '';

    // Remove the existing customer from the list
    customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(customers));
    renderCustomerList();
  }

  // Expose delete customer function globally
  window.deleteCustomer = function(index) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      customers.splice(index, 1);
      localStorage.setItem('customers', JSON.stringify(customers));
      renderCustomerList();
    }
  }

  window.editZone = function(index) {
    const zone = zones[index];
    
    document.getElementById('zone-name').value = zone.name;
    document.getElementById('zone-description').value = zone.description || '';
    document.getElementById('zone-delivery-fee').value = zone.deliveryFee;

    // Remove the existing zone from the list
    zones.splice(index, 1);
    localStorage.setItem('zones', JSON.stringify(zones));
    renderZonesList();
  }

  window.deleteZone = function(index) {
    if (confirm('Tem certeza que deseja excluir esta zona?')) {
      zones.splice(index, 1);
      localStorage.setItem('zones', JSON.stringify(zones));
      renderZonesList();
    }
  }

  // Event Listeners
  openCustomerModalBtn.addEventListener('click', () => {
    customerModal.style.display = 'block';
  });

  closeCustomerModalBtn.addEventListener('click', () => {
    customerModal.style.display = 'none';
  });

  addCustomerForm.addEventListener('submit', addCustomer);
  
  // Add zone form event listener
  addZoneForm.addEventListener('submit', addZone);

  // Initial render of customer and zones lists
  renderCustomerList();
  renderZonesList();

  // Close modal if clicked outside
  window.addEventListener('click', (event) => {
    if (event.target === customerModal) {
      customerModal.style.display = 'none';
    }
  });
});