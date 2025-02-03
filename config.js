document.addEventListener('DOMContentLoaded', () => {
    const configModal = document.getElementById('configuration-modal');
    const configBtn = document.getElementById('config-btn');
    const configCloseBtn = document.querySelector('.config-close');
    const configTabs = document.querySelectorAll('.config-tab');
    const configContents = document.querySelectorAll('.config-content');
    const saveConfigBtn = document.getElementById('save-config-btn');
    const resetConfigBtn = document.getElementById('reset-config-btn');

    // Load existing configurations
    function loadConfigurations() {
        const savedConfig = JSON.parse(localStorage.getItem('systemConfig')) || {};
        
        // System settings
        document.getElementById('multi-language-toggle').checked = savedConfig.multiLanguage || false;
        document.getElementById('dark-mode-toggle').checked = savedConfig.darkMode || false;
        document.getElementById('currency-select').value = savedConfig.currency || 'CVE';

        // Delivery settings
        document.getElementById('delivery-enabled-toggle').checked = savedConfig.deliveryEnabled || false;
        document.getElementById('default-delivery-fee').value = savedConfig.defaultDeliveryFee || 200;
        document.getElementById('min-delivery-time').value = savedConfig.minDeliveryTime || 30;

        // Payment settings
        document.getElementById('online-payment-toggle').checked = savedConfig.onlinePaymentEnabled || false;
        const paymentMethods = savedConfig.paymentMethods || [];
        document.querySelectorAll('input[name="payment-method"]').forEach(checkbox => {
            checkbox.checked = paymentMethods.includes(checkbox.value);
        });

        // Reports settings
        document.getElementById('auto-reports-toggle').checked = savedConfig.autoReports || false;
        document.getElementById('report-frequency').value = savedConfig.reportFrequency || 'monthly';
    }

    // Save configurations
    function saveConfigurations() {
        const config = {
            // System settings
            multiLanguage: document.getElementById('multi-language-toggle').checked,
            darkMode: document.getElementById('dark-mode-toggle').checked,
            currency: document.getElementById('currency-select').value,

            // Delivery settings
            deliveryEnabled: document.getElementById('delivery-enabled-toggle').checked,
            defaultDeliveryFee: parseFloat(document.getElementById('default-delivery-fee').value),
            minDeliveryTime: parseInt(document.getElementById('min-delivery-time').value),

            // Payment settings
            onlinePaymentEnabled: document.getElementById('online-payment-toggle').checked,
            paymentMethods: Array.from(
                document.querySelectorAll('input[name="payment-method"]:checked')
            ).map(checkbox => checkbox.value),

            // Reports settings
            autoReports: document.getElementById('auto-reports-toggle').checked,
            reportFrequency: document.getElementById('report-frequency').value
        };

        localStorage.setItem('systemConfig', JSON.stringify(config));
        alert('Configurações salvas com sucesso!');
    }

    // Reset to default configurations
    function resetConfigurations() {
        if (confirm('Tem certeza que deseja restaurar as configurações padrão?')) {
            localStorage.removeItem('systemConfig');
            loadConfigurations();
            alert('Configurações restauradas para os padrões.');
        }
    }

    // Tab switching logic
    configTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Remove active class from all tabs and hide all contents
            configTabs.forEach(t => t.classList.remove('active'));
            configContents.forEach(c => c.style.display = 'none');

            // Activate current tab and show its content
            tab.classList.add('active');
            document.getElementById(`${tabId}-config`).style.display = 'block';
        });
    });

    // Event Listeners
    configBtn.addEventListener('click', () => {
        loadConfigurations();
        configModal.style.display = 'block';
    });

    configCloseBtn.addEventListener('click', () => {
        configModal.style.display = 'none';
    });

    saveConfigBtn.addEventListener('click', saveConfigurations);
    resetConfigBtn.addEventListener('click', resetConfigurations);

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === configModal) {
            configModal.style.display = 'none';
        }
    });

    // Initial load of configurations
    loadConfigurations();
});