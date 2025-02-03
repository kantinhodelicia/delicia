document.addEventListener('DOMContentLoaded', () => {
    const deliveryBtn = document.getElementById('delivery-btn');
    const deliveryModal = document.getElementById('delivery-modal');
    const deliveryCloseBtn = document.querySelector('.delivery-close');
    const deliveryTimeSelect = document.getElementById('delivery-time');
    const deliveryScheduledTime = document.getElementById('delivery-scheduled-time');
    const confirmDeliveryBtn = document.getElementById('confirm-delivery-btn');
    const deliveryZoneSelect = document.getElementById('delivery-zone');

    // Show delivery modal
    deliveryBtn.addEventListener('click', () => {
        deliveryModal.style.display = 'block';
    });

    // Close delivery modal
    deliveryCloseBtn.addEventListener('click', () => {
        deliveryModal.style.display = 'none';
    });

    // Toggle scheduled time input based on selection
    deliveryTimeSelect.addEventListener('change', (e) => {
        deliveryScheduledTime.style.display = 
            e.target.value === 'scheduled' ? 'block' : 'none';
    });

    // Delivery zone selection handling
    deliveryZoneSelect.addEventListener('change', (e) => {
        const selectedZone = e.target.value;
        const zone = JSON.parse(localStorage.getItem('zones') || '[]')
            .find(z => z.name === selectedZone);
        
        // Display delivery fee information
        if (zone) {
            const feeInfo = document.getElementById('delivery-fee-info');
            if (!feeInfo) {
                const feeInfoEl = document.createElement('p');
                feeInfoEl.id = 'delivery-fee-info';
                feeInfoEl.textContent = `Taxa de Entrega: ${zone.deliveryFee}$00`;
                deliveryZoneSelect.after(feeInfoEl);
            } else {
                feeInfo.textContent = `Taxa de Entrega: ${zone.deliveryFee}$00`;
            }
        }
    });

    // Confirm delivery details
    confirmDeliveryBtn.addEventListener('click', () => {
        const name = document.getElementById('delivery-name').value;
        const phone = document.getElementById('delivery-phone').value;
        const address = document.getElementById('delivery-address').value;
        const deliveryZone = document.getElementById('delivery-zone').value;
        const deliveryTime = document.getElementById('delivery-time').value;
        const scheduledTime = document.getElementById('delivery-scheduled-time').value;
        const instructions = document.getElementById('delivery-instructions').value;

        // Validate required fields
        if (!name || !phone || !address || !deliveryZone || !deliveryTime) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // If scheduled time is selected but not filled
        if (deliveryTime === 'scheduled' && !scheduledTime) {
            alert('Por favor, selecione o horário agendado.');
            return;
        }

        // Find the selected zone's delivery fee
        const zones = JSON.parse(localStorage.getItem('zones') || '[]');
        const selectedZone = zones.find(z => z.name === deliveryZone);
        const deliveryFee = selectedZone ? selectedZone.deliveryFee : 0;

        // Add delivery fee to cart
        cart.push({
            nome: "Taxa de Entrega",
            size: `Zona: ${deliveryZone}`,
            price: deliveryFee,
            quantity: 1
        });

        // Update cart display
        updateCartDisplay();

        // Prepare delivery details for invoice
        const deliveryDetails = {
            name,
            phone,
            address,
            zone: deliveryZone,
            deliveryTime,
            scheduledTime: deliveryTime === 'scheduled' ? scheduledTime : null,
            instructions,
            deliveryFee
        };

        // Store delivery details in localStorage for use in invoice
        localStorage.setItem('deliveryDetails', JSON.stringify(deliveryDetails));

        // Close modal
        deliveryModal.style.display = 'none';

        // Optional: You might want to automatically proceed to checkout
        checkout();
    });

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === deliveryModal) {
            deliveryModal.style.display = 'none';
        }
    });
});