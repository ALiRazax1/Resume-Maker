import React, { useRef, useState, useEffect } from 'react';
import { useResumeStore } from '../../store/resumeStore';
import { fontPairings } from '../../data/fonts';
import { useFontLoader } from '../../hooks/useFontLoader';

// Import all 10 templates
import ClassicTemplate from '../templates/ClassicTemplate';
import ModernTemplate from '../templates/ModernTemplate';
import ExecutiveTemplate from '../templates/ExecutiveTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import TechTemplate from '../templates/TechTemplate';
import ElegantTemplate from '../templates/ElegantTemplate';
import CompactTemplate from '../templates/CompactTemplate';
import BoldTemplate from '../templates/BoldTemplate';
import InfographicTemplate from '../templates/InfographicTemplate';

const ResumePreview = React.forwardRef((props, ref) => {
  const {
    resumeData,
    activeTemplate,
    accentColor,
    fontPairing,
    showPhoto,
    sectionOrder,
  } = useResumeStore();

  const parentRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Load Google Fonts for active pairing dynamically
  useFontLoader(fontPairing);

  const activeFontConfig = fontPairings.find((f) => f.id === fontPairing) || fontPairings[0];

  // Measure parent width and calculate scale
  useEffect(() => {
    if (!parentRef.current) return;

    const handleResize = () => {
      if (!parentRef.current) return; // guard against unmounted ref
      const parentWidth = parentRef.current.clientWidth;
      const A4_WIDTH = 794; // 210mm at 96dpi
      const targetWidth = parentWidth - 16; // 8px padding each side
      const newScale = Math.min(1, targetWidth / A4_WIDTH);
      setScale(newScale > 0.1 ? newScale : 1);
    };

    // Use ResizeObserver for responsive measuring
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(parentRef.current);

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Template mapper
  const renderTemplate = () => {
    const templateProps = {
      data: { ...resumeData, sectionOrder },
      accentColor,
      fontConfig: activeFontConfig,
      showPhoto,
    };

    switch (activeTemplate) {
      case 'classic':
        return <ClassicTemplate {...templateProps} />;
      case 'modern':
        return <ModernTemplate {...templateProps} />;
      case 'executive':
        return <ExecutiveTemplate {...templateProps} />;
      case 'creative':
        return <CreativeTemplate {...templateProps} />;
      case 'minimal':
        return <MinimalTemplate {...templateProps} />;
      case 'tech':
        return <TechTemplate {...templateProps} />;
      case 'elegant':
        return <ElegantTemplate {...templateProps} />;
      case 'compact':
        return <CompactTemplate {...templateProps} />;
      case 'bold':
        return <BoldTemplate {...templateProps} />;
      case 'infographic':
        return <InfographicTemplate {...templateProps} />;
      default:
        return <ModernTemplate {...templateProps} />;
    }
  };

  return (
    <div className="flex justify-center p-3 sm:p-5 bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-white/8 rounded-2xl shadow-sm dark:shadow-2xl h-auto lg:h-[calc(100vh-200px)] lg:min-h-[500px]">
      <div ref={parentRef} className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center items-start">
        {/* Scale bounding box */}
        <div
          className="relative flex-shrink-0 transition-transform duration-100"
          style={{
            width: `${794 * scale}px`,
            height: `${1123 * scale}px`,
            marginTop: '8px',
            marginBottom: '8px',
          }}
        >
          {/* A4 Resume Page with Ref callback (for printing capture) */}
          <div
            ref={ref}
            className="resume-container flex-shrink-0"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '794px',
              height: '1123px',
              boxSizing: 'border-box',
            }}
          >
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
