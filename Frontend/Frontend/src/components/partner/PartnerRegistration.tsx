import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';

const PartnerRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const { token } = useAuthStore();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleRegistration = async () => {
    setResponseMessage('');
    try {
      setIsSubmitting(true);
      const response = await fetch(`${BASE_URL}/partners`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: 'pending' }),
      });
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      setResponseMessage(data.message);
      toast.success('Registration submitted successfully! Please wait for admin approval.');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-end space-x-4">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleRegistration}
          className="btn-primary"
        >
          {isSubmitting ? 'Submitting...' : 'Register as Partner'}
        </button>
      </div>
      {responseMessage && (
      <div className="mt-4 p-3 bg-green-100 text-green-800 rounded shadow-sm">
        {responseMessage}
      </div>
      )}
    </div>
  );
};

export default PartnerRegistration;
