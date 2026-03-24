
import React, { useState } from 'react';
import {
  Lock,
  AlertCircle,
  Network,
  Shield,
  Activity,
  Mail,
  CheckCircle,
  Users,
  Globe,
  Router,
  Compass,
  Ruler,
  Clock,
} from 'lucide-react';
import { verifyPassword } from '../utils/hash';

interface LoginProps {
  onSuccess: (password: string) => void;
  passwordHash: string; // SHA-256 hash of the correct password
}

export const Login: React.FC<LoginProps> = ({ onSuccess, passwordHash }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLecturerModal, setShowLecturerModal] = useState(false);

  const lecturers = [
    { name: 'Guido Frissaer', email: 'guido.frissaer@pxl.be' },
    { name: 'Stijn Jacobs', email: 'stijn.jacobs@pxl.be' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    const isValid = await verifyPassword(inputPassword, passwordHash);

    if (isValid) {
      // Pass raw password to derive session signing key
      onSuccess(inputPassword);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    setIsVerifying(false);
  };

  const topics = [
    { icon: Globe, title: 'IPv6 Reality Check', desc: 'Busting myths — 51%+ of Internet traffic is already IPv6', bgClass: 'bg-blue-500/20', iconClass: 'text-blue-400' },
    { icon: Ruler, title: 'IPv6 Address Design', desc: 'The 4 rules for planning a scalable IPv6 address hierarchy', bgClass: 'bg-green-500/20', iconClass: 'text-green-400' },
    { icon: Router, title: 'IPv6 Operations', desc: 'Headers, NDP, DAD, PMTUD — how IPv6 actually works', bgClass: 'bg-purple-500/20', iconClass: 'text-purple-400' },
    { icon: Network, title: 'NDP & Neighbor Discovery', desc: 'RS/RA, NS/NA and duplicate address detection in depth', bgClass: 'bg-indigo-500/20', iconClass: 'text-indigo-400' },
    { icon: Shield, title: 'NAT64 & Transition', desc: 'IPv6-mostly, option 108, CLAT/PLAT and the IPv6-only journey', bgClass: 'bg-orange-500/20', iconClass: 'text-orange-400' },
    { icon: Compass, title: 'Deploy IPv6 NOW!', desc: 'Practical guidance from IPv6 Forum Fellow Guido Frissaer', bgClass: 'bg-red-500/20', iconClass: 'text-red-400' },
  ];

  const benefits = [
    'Based on real-world IPv6 deployments by Guido Frissaer (IPv6 Forum Fellow)',
    'Covers both perception vs. reality and practical deployment guidance',
    'Addresses IPv6-only, NAT64, SLAAC, NDP, and address planning',
    'Applicable to enterprise networks, ISPs, hyperscalers, and cloud deployments',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-300 text-sm">
              <Globe className="w-4 h-4" />
              <span>IPv6 Forum — Guido Frissaer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              IPv6<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Today
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Two sessions covering everything you need to deploy IPv6 — from debunking myths
              to address planning, NDP operations, and the IPv6-only journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => setShowLogin(true)}
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Open slides
              </button>
              <button
                onClick={() => setShowLecturerModal(true)}
                className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact speaker
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Session 1: Perception vs. Reality</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>IPv6 Forum presentation</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Session 2: Let's Deploy IPv6 NOW!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          What you'll learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${topic.bgClass} mb-4`}>
                <topic.icon className={`w-6 h-6 ${topic.iconClass}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
              <p className="text-gray-400 text-sm">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why attend this session?
            </h2>
            <ul className="space-y-4 text-left inline-block">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to deploy IPv6?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Questions about IPv6 deployment? Get in touch with the speaker.
          </p>
          <button
            onClick={() => setShowLecturerModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Contact the speaker
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} IPv6 Forum. Have the password?{' '}
          <button
            onClick={() => setShowLogin(true)}
            className="text-blue-400 hover:underline"
          >
            Open with password
          </button>
        </div>
      </div>

      {/* Lecturer Selection Modal */}
      {showLecturerModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
                <Mail className="w-7 h-7 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Kies een docent</h2>
              <p className="text-gray-500 text-sm mt-2">
                Select the speaker to send an email to
              </p>
            </div>

            <div className="space-y-3">
              {lecturers.map((lecturer, index) => (
                <a
                  key={index}
                  href={`mailto:${lecturer.email}?subject=Vraag%20Linux%20Advanced`}
                                    href={`mailto:${lecturer.email}?subject=Question%20about%20IPv6%20presentation`}
                  onClick={() => setShowLecturerModal(false)}
                  className="block w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                >
                  <div className="font-semibold text-gray-800">{lecturer.name}</div>
                  <div className="text-sm text-gray-600">{lecturer.email}</div>
                </a>
              ))}
            </div>

            <button
              onClick={() => setShowLecturerModal(false)}
              className="w-full mt-4 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all"
            >
                Cancel
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all ${
              isShaking ? 'animate-shake' : ''
            }`}
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
                <Lock className="w-7 h-7 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Voer het cursuswachtwoord in</h2>
              <p className="text-gray-500 text-sm mt-2">
                No password? Contact{' '}
                <a href="mailto:guido.frissaer@pxl.be" className="text-blue-600 hover:underline">
                  guido.frissaer@pxl.be
                </a>
              </p>
                              placeholder="Enter password"
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Voer wachtwoord in"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors ${
                    error
                      ? 'border-red-400 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  autoFocus
                />
                {error && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Incorrect password. Please try again.</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? 'Checking...' : 'Unlock'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
