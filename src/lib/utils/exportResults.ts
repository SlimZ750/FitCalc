/**
 * Export utilities for calculator results
 * Supports PDF and Image (PNG/JPG) export
 */

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

async function waitForImages(element: HTMLElement): Promise<void> {
  const images = Array.from(element.querySelectorAll('img'));
  await Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise<void>((resolve, reject) => {
        image.addEventListener('load', () => resolve(), { once: true });
        image.addEventListener('error', () => reject(new Error(`Unable to load image: ${image.src}`)), { once: true });
      });
    })
  );
}

/**
 * Export results as PNG image
 */
export async function exportAsImage(
  elementId: string,
  filename: string = 'fitcalc-results',
  format: 'png' | 'jpg' = 'png'
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  try {
    await waitForImages(element);
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      // Keep the poster's black page background in PNG as well as JPG.
      backgroundColor: '#050505',
      logging: false,
      useCORS: true,
    });

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }, `image/${format}`);
  } catch (error) {
    console.error('Error exporting image:', error);
    throw error;
  }
}

/**
 * Export results as PDF
 */
export async function exportAsPDF(
  elementId: string,
  filename: string = 'fitcalc-results'
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  try {
    await waitForImages(element);
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#050505',
      logging: false,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // The infographic uses the same portrait ratio as an A4 page, so fill it edge-to-edge.
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Error exporting PDF:', error);
    throw error;
  }
}

/**
 * Share results using Web Share API or fallback to clipboard
 */
export async function shareResults(
  data: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    goal: string;
  },
  elementId?: string
): Promise<void> {
  const shareText = `🎯 Mes résultats FitCalc:\n\n📊 Calories: ${Math.round(data.calories)} kcal/jour\n🍗 Protéines: ${Math.round(data.protein)}g\n🌾 Glucides: ${Math.round(data.carbs)}g\n🥑 Lipides: ${Math.round(data.fats)}g\n\nObjectif: ${data.goal}\n\n✨ Calculez les vôtres sur FitCalc!`;

  // Try Web Share API first (mobile-friendly)
  if (navigator.share && elementId) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        await waitForImages(element);
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
        });

        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b!), 'image/png');
        });

        const file = new File([blob], 'fitcalc-results.png', {
          type: 'image/png',
        });

        await navigator.share({
          title: 'Mes résultats FitCalc',
          text: shareText,
          files: [file],
        });
        return;
      }
    } catch (error) {
      console.log('Web Share API failed, falling back to text share:', error);
    }
  }

  // Fallback to text-only share
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Mes résultats FitCalc',
        text: shareText,
      });
      return;
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.log('Share failed, falling back to clipboard:', error);
      } else {
        return; // User cancelled
      }
    }
  }

  // Final fallback: copy to clipboard
  try {
    await navigator.clipboard.writeText(shareText);
    alert('✅ Résultats copiés dans le presse-papiers!');
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    alert('❌ Impossible de partager. Veuillez réessayer.');
  }
}
