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
              <div className={landingPageStyles.logoIconInner}>
                <FileText className={landingPageStyles.logoIconFile} />
                <Sparkles className={landingPageStyles.logoIconSparkle} />
              </div>
              <div className={landingPageStyles.logoGlow}></div>
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
                <CheckCircle className={landingPageStyles.taglineIcon} size={16} />
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
                  <div className={landingPageStyles.buttonGlow}></div>
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
                    <div className={landingPageStyles.statIcon}>{stat.icon}</div>
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
                <div className={landingPageStyles.floatingElement1}>
                  <div className={landingPageStyles.floatingDot}></div>
                </div>
                <div className={landingPageStyles.floatingElement2}>
                  <div className={landingPageStyles.floatingSquare}></div>
                </div>
                <div className={landingPageStyles.floatingElement3}>
                  <div className={landingPageStyles.floatingTriangle}></div>
                </div>

                {/* Main Resume Card */}
                <div className={landingPageStyles.resumeCard}>
                  <div className={landingPageStyles.resumeCardHeader}>
                    <div className={landingPageStyles.resumeAvatar}></div>
                    <div className={landingPageStyles.resumeHeaderText}>
                      <div className={landingPageStyles.resumeName}>John Doe</div>
                      <div className={landingPageStyles.resumeTitle}>Software Engineer</div>
                    </div>
                  </div>
                  
                  <div className={landingPageStyles.resumeSection}>
                    <div className={landingPageStyles.resumeSectionTitle}>Experience</div>
                    <div className={landingPageStyles.resumeItem}>
                      <div className={landingPageStyles.resumeItemTitle}>Senior Developer</div>
                      <div className={landingPageStyles.resumeItemCompany}>Tech Corp • 2022-Present</div>
                    </div>
                  </div>

                  <div className={landingPageStyles.resumeSection}>
                    <div className={landingPageStyles.resumeSectionTitle}>Skills</div>
                    <div className={landingPageStyles.resumeSkills}>
                      <span className={landingPageStyles.resumeSkill}>React</span>
                      <span className={landingPageStyles.resumeSkill}>Node.js</span>
                      <span className={landingPageStyles.resumeSkill}>Python</span>
                    </div>
                  </div>
                </div>

                {/* Animated Icons */}
                <div className={landingPageStyles.animatedIcon1}>
                  <FileText className={landingPageStyles.iconFile} />
                </div>
                <div className={landingPageStyles.animatedIcon2}>
                  <LayoutTemplate className={landingPageStyles.iconTemplate} />
                </div>
                <div className={landingPageStyles.animatedIcon3}>
                  <Download className={landingPageStyles.iconDownload} />
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
          <div className={landingPageStyles.footerContent}>
            <div className={landingPageStyles.footerLogo}>
              <div className={landingPageStyles.footerLogoIcon}>
                <FileText className={landingPageStyles.footerLogoIconInner} />
              </div>
              <span className={landingPageStyles.footerLogoText}>ResumeCraft</span>
            </div>
            <div className={landingPageStyles.footerCopyright}>
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