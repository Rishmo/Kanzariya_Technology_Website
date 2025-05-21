import { useState, useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
const BASE_URL = import.meta.env.VITE_BASE_URL;

type ApprovalRequest = {
    _id: string;
    status: string;
    createdAt: string;
    userId: {
        _id: string;
        email: string;
    };
};

const PartnerApprovalsPage = () => {
    const { token } = useAuthStore();
    const [approvals, setApprovals] = useState<ApprovalRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchApprovals();
    }, [token]);

    const fetchApprovals = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/partners/getPartner`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('Failed to fetch approvals');
            }

            const data = await res.json();
            setApprovals(data);
        } catch (err: any) {
            setError(err.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (_id: string) => {
        try {
            const res = await fetch(`${BASE_URL}/partners/${_id}/approve`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error('Approval failed');
            }

            fetchApprovals();
        } catch (err: any) {
            alert(err.message || 'Something went wrong');
        }
    };

    if (loading) return <p>Loading approvals...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Partner Approval Requests</h2>
            {approvals.length === 0 ? (
                <p>No approval requests found.</p>
            ) : (
                <ul className="space-y-4">
                    {approvals.map(({ _id, userId, createdAt, status }) => (
                        <li
                            key={_id}
                            className="p-4 bg-white rounded-xl shadow-soft flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold text-primary-900">{userId.email}</p>
                                <p className="text-sm text-gray-600">
                                    Submitted: {new Date(createdAt).toLocaleString()}
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'pending'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : status === 'approved'
                                                ? 'bg-green-100 text-green-800'
                                                : status === 'rejected'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {status}
                                </span>
                                {status === 'pending' && (
                                    <button
                                        onClick={() => handleApprove(_id)}
                                        className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1.5 rounded-lg"
                                    >
                                        Approve
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PartnerApprovalsPage;
