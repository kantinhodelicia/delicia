class Invoice {
  constructor(cart, customerData) {
    this.cart = cart;
    this.customerData = customerData;
    this.invoiceNumber = this.generateInvoiceNumber();
    this.date = new Date().toLocaleDateString('pt-CV');
    
    // Check for delivery details
    this.deliveryDetails = JSON.parse(localStorage.getItem('deliveryDetails')) || null;
    
    this.subtotal = this.calculateSubtotal();
    this.iva = this.calculateIVA();
    this.total = this.subtotal + this.iva;
  }

  generateInvoiceNumber() {
    return `FT ${new Date().getFullYear()}/${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  }

  calculateSubtotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  calculateIVA() {
    // Cape Verde standard IVA (VAT) rate is typically 15%
    return this.subtotal * 0.15;
  }

  generateInvoiceHTML() {
    // Add delivery details to invoice if available
    const deliverySection = this.deliveryDetails ? `
      <div class="delivery-info">
        <h3>Detalhes de Entrega</h3>
        <p><strong>Nome:</strong> ${this.deliveryDetails.name}</p>
        <p><strong>Telefone:</strong> ${this.deliveryDetails.phone}</p>
        <p><strong>Endereço:</strong> ${this.deliveryDetails.address}</p>
        <p><strong>Tempo de Entrega:</strong> 
          ${this.getDeliveryTimeText(this.deliveryDetails.deliveryTime, this.deliveryDetails.scheduledTime)}
        </p>
        ${this.deliveryDetails.instructions ? 
          `<p><strong>Instruções Adicionais:</strong> ${this.deliveryDetails.instructions}</p>` : 
          ''}
      </div>
    ` : '';

    return `
      <div class="invoice">
        <h2>Fatura / Recibo</h2>
        <div class="invoice-header">
          <p><strong>Kantinho Delícia</strong></p>
          <p>NIF: 123456789</p>
          <p>Endereço: Rua Principal, Cidade, Cabo Verde</p>
        </div>
        <div class="invoice-details">
          <p>Número da Fatura: ${this.invoiceNumber}</p>
          <p>Data: ${this.date}</p>
          <p>Cliente: ${this.customerData.name}</p>
          <p>Endereço: ${this.customerData.address}</p>
          <p>NIF: ${this.customerData.nif}</p>
        </div>
        <table class="invoice-items">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço Unitário</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${this.cart.map(item => `
              <tr>
                <td>${item.nome} ${item.size ? `(${item.size})` : ''}</td>
                <td>${item.quantity}</td>
                <td>${item.price}$00</td>
                <td>${item.price * item.quantity}$00</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        ${deliverySection}
        <div class="invoice-summary">
          <p>Subtotal: ${this.subtotal}$00</p>
          <p>IVA (15%): ${this.iva.toFixed(2)}$00</p>
          <p><strong>Total: ${this.total.toFixed(2)}$00</strong></p>
        </div>
        <div class="invoice-footer">
          <p>Obrigado pela sua compra!</p>
          <p>Fatura processada por sistema informático</p>
          <button id="print-invoice-btn" onclick="window.print()">Imprimir Fatura</button>
        </div>
      </div>
    `;
  }

  getDeliveryTimeText(deliveryTime, scheduledTime) {
    switch(deliveryTime) {
      case 'asap': return 'O Mais Rápido Possível';
      case '30min': return 'Dentro de 30 Minutos';
      case '1hour': return 'Dentro de 1 Hora';
      case 'scheduled': return `Agendado para ${new Date(scheduledTime).toLocaleString('pt-CV')}`;
      default: return 'Não especificado';
    }
  }
}

// Add event listener for invoice generation and interactions
document.addEventListener('DOMContentLoaded', () => {
  const invoiceModal = document.getElementById('invoice-modal');
  const closeBtn = document.querySelector('.close-btn');
  const confirmCustomerBtn = document.getElementById('confirm-customer-btn');

  confirmCustomerBtn.addEventListener('click', () => {
    const customerName = document.getElementById('customer-name').value;
    const customerAddress = document.getElementById('customer-address').value;
    const customerNIF = document.getElementById('customer-nif').value;

    if (customerName && customerAddress && customerNIF) {
      const customerData = {
        name: customerName,
        address: customerAddress,
        nif: customerNIF
      };

      // Create invoice with current cart and customer data
      const invoice = new Invoice(cart, customerData);
      
      // Display invoice in modal
      document.getElementById('invoice-content').innerHTML = invoice.generateInvoiceHTML();
      
      // Show modal
      invoiceModal.style.display = 'block';
    } else {
      alert('Por favor, preencha todos os campos do cliente.');
    }
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    invoiceModal.style.display = 'none';
  });

  // Close modal if clicked outside of it
  window.addEventListener('click', (event) => {
    if (event.target === invoiceModal) {
      invoiceModal.style.display = 'none';
    }
  });
});