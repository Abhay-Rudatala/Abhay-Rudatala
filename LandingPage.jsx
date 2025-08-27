import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, LayoutTemplate, Zap, Download, Menu, X, FileText, Sparkles, CheckCircle } from 'lucide-react';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import { ProfileInfoCard } from "../components/Cards";
import { landingPageStyles } from "../assets/dummystyle";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={landingPageStyles.container}>
      {/* Header */}
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <div className={`${landingPageStyles.logoIcon} ${isVisible ? 'animate-logo' : ''}`}>
              <div className="relative flex items-center justify-center w-full h-full">
                <FileText className="w-5 h-5 text-white z-10" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-sparkle" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glow"></div>
              </div>
            </div>
            <span className={`${landingPageStyles.logoText} ${isVisible ? 'animate-text' : ''}`}>
              ResumeCraft
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ?
              <X size={24} className={landingPageStyles.mobileMenuIcon} /> :
              <Menu size={24} className={landingPageStyles.mobileMenuIcon} />
            }
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className={landingPageStyles.desktopAuthButton}
                onClick={() => setOpenAuthModal(true)}
              >
                <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                <span className={landingPageStyles.desktopAuthButtonText}>Get Started</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserWelcome}>
                    Welcome back
                  </div>
                  <button
                    className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate("/dashboard");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <button
                  className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={landingPageStyles.main}>
        {/* Hero Section */}
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* Left Content */}
            <div className={`${landingPageStyles.heroLeft} ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className={`${landingPageStyles.tagline} ${isVisible ? 'animate-fade-in' : ''}`}>
                <CheckCircle className="w-4 h-4" />
                Professional Resume Builder
              </div>

              <h1 className={`${landingPageStyles.heading} ${isVisible ? 'animate-heading' : ''}`}>
                <span className={landingPageStyles.headingText}>Craft</span>
                <span className={landingPageStyles.headingGradient}>Professional</span>
                <span className={landingPageStyles.headingText}>Resumes</span>
              </h1>

              <p className={`${landingPageStyles.description} ${isVisible ? 'animate-fade-in-delay' : ''}`}>
                Create job-winning resumes with expertly designed templates.
                ATS-friendly, recruiter-approved, and tailored to
                your career goals.
              </p>

              <div className={`${landingPageStyles.ctaButtons} ${isVisible ? 'animate-buttons' : ''}`}>
                <button
                  className={landingPageStyles.primaryButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.primaryButtonOverlay}></div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Start Building
                    <ArrowRight size={18} className={landingPageStyles.primaryButtonIcon} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-button-glow"></div>
                </button>

                <button onClick={handleCTA} className={landingPageStyles.secondaryButton}>
                  View Templates
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className={`${landingPageStyles.statsContainer} ${isVisible ? 'animate-stats' : ''}`}>
                {[
                  { value: '50K+', label: 'Resumes Created', gradient: 'from-violet-600 to-fuchsia-600', icon: '📄' },
                  { value: '4.9★', label: 'User Rating', gradient: 'from-orange-500 to-red-500', icon: '⭐' },
                  { value: '5 Min', label: 'Build Time', gradient: 'from-emerald-500 to-teal-500', icon: '⚡' }
                ].map((stat, idx) => (
                  <div key={idx} className={`${landingPageStyles.statItem} ${isVisible ? `animate-stat-${idx + 1}` : ''}`}>
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className={`${landingPageStyles.statNumber} ${stat.gradient}`}>{stat.value}</div>
                    <div className={landingPageStyles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Animated Illustration */}
            <div className={`${landingPageStyles.heroIllustration} ${isVisible ? 'animate-float' : ''}`}>
              <div className={landingPageStyles.heroIllustrationBg}></div>
              <div className={landingPageStyles.heroIllustrationContainer}>
                {/* Floating Elements */}
                <div className="absolute top-5 left-5 animate-float-element-1">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg shadow-orange-200"></div>
                </div>
                <div className="absolute top-16 right-10 animate-float-element-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded shadow-lg shadow-violet-200"></div>
                </div>
                <div className="absolute bottom-10 left-16 animate-float-element-3">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-l-transparent border-r-transparent border-b-emerald-500 shadow-lg shadow-emerald-200"></div>
                </div>

                {/* Main Resume Card */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl shadow-violet-200/50 max-w-[320px] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600"></div>
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full"></div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800">John Doe</div>
                      <div className="text-sm text-gray-600">Software Engineer</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Experience</div>
                    <div className="mb-2">
                      <div className="text-sm font-medium text-gray-800">Senior Developer</div>
                      <div className="text-xs text-gray-600">Tech Corp • 2022-Present</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Skills</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">React</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Python</span>
                    </div>
                  </div>
                </div>

                {/* Animated Icons */}
                <div className="absolute top-10 right-16 animate-icon-float-1">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                <div className="absolute top-32 right-6 animate-icon-float-2">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <LayoutTemplate className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
                <div className="absolute bottom-20 right-20 animate-icon-float-3">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-violet-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={landingPageStyles.featuresSection}>
          <div className={landingPageStyles.featuresContainer}>
            <div className={landingPageStyles.featuresHeader}>
              <h2 className={landingPageStyles.featuresTitle}>
                Why Choose <span className={landingPageStyles.featuresTitleGradient}>ResumeCraft?</span>
              </h2>
              <p className={landingPageStyles.featuresDescription}>
                Everything you need to create a professional resume that stands out
              </p>
            </div>

            <div className={landingPageStyles.featuresGrid}>
              {[
                {
                  icon: <Zap className={landingPageStyles.featureIcon} />,
                  title: "Lightning Fast",
                  description: "Create professional resumes in under 5 minutes with our streamlined process",
                  gradient: landingPageStyles.featureIconViolet,
                  bg: landingPageStyles.featureCardViolet
                },
                {
                  icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                  title: "Pro Templates",
                  description: "Choose from dozens of recruiter-approved, industry-specific templates",
                  gradient: landingPageStyles.featureIconFuchsia,
                  bg: landingPageStyles.featureCardFuchsia
                },
                {
                  icon: <Download className={landingPageStyles.featureIcon} />,
                  title: "Instant Export",
                  description: "Download high-quality PDFs instantly with perfect formatting",
                  gradient: landingPageStyles.featureIconOrange,
                  bg: landingPageStyles.featureCardOrange
                }
              ].map((feature, index) => (
                <div key={index} className={`${landingPageStyles.featureCard} ${isVisible ? `animate-feature-${index + 1}` : ''}`}>
                  <div className={landingPageStyles.featureCardHover}></div>
                  <div className={`${landingPageStyles.featureCardContent} ${feature.bg}`}>
                    <div className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
                    <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={landingPageStyles.ctaSection}>
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaCardContent}>
                <h2 className={landingPageStyles.ctaTitle}>
                  Ready to Build Your <span className={landingPageStyles.ctaTitleGradient}>Standout Resume?</span>
                </h2>
                <p className={landingPageStyles.ctaDescription}>
                  Join thousands of professionals who landed their dream jobs with our platform
                </p>
                <button
                  className={landingPageStyles.ctaButton}
                  onClick={handleCTA}
                >
                  <div className={landingPageStyles.ctaButtonOverlay}></div>
                  <span className={landingPageStyles.ctaButtonText}>Start Building Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={landingPageStyles.footer}>
        <div className={landingPageStyles.footerContainer}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                ResumeCraft
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              © 2024 ResumeCraft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;