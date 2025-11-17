import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ChevronRight, ChevronLeft, Download, RefreshCw, TrendingUp, AlertCircle, CheckCircle, Award } from 'lucide-react';

const MadurezDigitalAgro = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [responses, setResponses] = useState({});

  const dimensions = [
    {
      id: 'produccion',
      name: 'Producción y Operaciones',
      icon: '🌾',
      color: '#10b981',
      questions: [
        {
          id: 'p1',
          text: '¿Cómo registra actualmente sus actividades de campo?',
          options: [
            { value: 1, label: 'Papel y lápiz, registros manuales' },
            { value: 2, label: 'Excel básico, sin estructura clara' },
            { value: 3, label: 'Software agrícola con registros digitales' },
            { value: 4, label: 'Sensores IoT y dashboards en tiempo real' },
            { value: 5, label: 'IA predictiva, agricultura de precisión completa' }
          ]
        },
        {
          id: 'p2',
          text: '¿Cómo monitorea el estado de sus cultivos/ganado?',
          options: [
            { value: 1, label: 'Inspección visual manual' },
            { value: 2, label: 'Reportes básicos del personal' },
            { value: 3, label: 'Software de gestión con alertas' },
            { value: 4, label: 'Sensores, cámaras, monitoreo remoto' },
            { value: 5, label: 'Drones, satélites, análisis con IA' }
          ]
        },
        {
          id: 'p3',
          text: '¿Cómo controla el uso de agua, fertilizantes e insumos?',
          options: [
            { value: 1, label: 'Aplicación manual sin medición' },
            { value: 2, label: 'Registros básicos de consumo' },
            { value: 3, label: 'Sistemas de medición digital' },
            { value: 4, label: 'Riego automatizado, aplicación variable' },
            { value: 5, label: 'Optimización con IA, prescripción por zonas' }
          ]
        },
        {
          id: 'p4',
          text: '¿Cómo gestiona el mantenimiento de su maquinaria?',
          options: [
            { value: 1, label: 'Reactivo, cuando se daña' },
            { value: 2, label: 'Calendario básico de mantenimiento' },
            { value: 3, label: 'Software de gestión de activos' },
            { value: 4, label: 'Telemetría, mantenimiento predictivo' },
            { value: 5, label: 'Maquinaria autónoma, optimización con IA' }
          ]
        },
        {
          id: 'p5',
          text: '¿Puede visualizar en tiempo real lo que sucede en su operación?',
          options: [
            { value: 1, label: 'No, solo inspecciones periódicas' },
            { value: 2, label: 'Reportes diarios/semanales manuales' },
            { value: 3, label: 'Reportes digitales actualizados' },
            { value: 4, label: 'Dashboards en tiempo real' },
            { value: 5, label: 'Control total 24/7 desde cualquier lugar' }
          ]
        }
      ]
    },
    {
      id: 'datos',
      name: 'Datos y Analítica',
      icon: '📊',
      color: '#3b82f6',
      questions: [
        {
          id: 'd1',
          text: '¿Registra datos de producción, clima y costos sistemáticamente?',
          options: [
            { value: 1, label: 'No registro datos de forma sistemática' },
            { value: 2, label: 'Algunos datos en planillas dispersas' },
            { value: 3, label: 'Captura digital estructurada' },
            { value: 4, label: 'Captura automática con sensores' },
            { value: 5, label: 'Captura multi-fuente integrada' }
          ]
        },
        {
          id: 'd2',
          text: '¿Qué porcentaje de sus datos está digitalizado?',
          options: [
            { value: 1, label: '0-20% (casi todo en papel)' },
            { value: 2, label: '21-40% (algunos datos digitales)' },
            { value: 3, label: '41-60% (la mayoría digital)' },
            { value: 4, label: '61-80% (casi todo digital)' },
            { value: 5, label: '81-100% (100% digital)' }
          ]
        },
        {
          id: 'd3',
          text: '¿Analiza datos para tomar decisiones de producción?',
          options: [
            { value: 1, label: 'Decisiones por intuición/experiencia' },
            { value: 2, label: 'Reviso datos históricos ocasionalmente' },
            { value: 3, label: 'Análisis de tendencias regular' },
            { value: 4, label: 'Modelos predictivos básicos' },
            { value: 5, label: 'IA para optimización continua' }
          ]
        },
        {
          id: 'd4',
          text: '¿Puede acceder a todos sus datos desde un solo lugar?',
          options: [
            { value: 1, label: 'Datos aislados en múltiples lugares' },
            { value: 2, label: 'Consolidación manual ocasional' },
            { value: 3, label: 'Base de datos centralizada' },
            { value: 4, label: 'ERP agrícola integrado' },
            { value: 5, label: 'Plataforma unificada con APIs' }
          ]
        },
        {
          id: 'd5',
          text: '¿Puede predecir rendimientos, problemas o necesidades?',
          options: [
            { value: 1, label: 'No, solo reacciono a lo que pasa' },
            { value: 2, label: 'Estimaciones básicas por experiencia' },
            { value: 3, label: 'Proyecciones con datos históricos' },
            { value: 4, label: 'Modelos predictivos confiables' },
            { value: 5, label: 'IA con precisión alta en predicciones' }
          ]
        }
      ]
    },
    {
      id: 'trazabilidad',
      name: 'Trazabilidad y Cadena',
      icon: '🔗',
      color: '#8b5cf6',
      questions: [
        {
          id: 't1',
          text: '¿Puede rastrear un producto desde el origen hasta el cliente?',
          options: [
            { value: 1, label: 'No tengo sistema de trazabilidad' },
            { value: 2, label: 'Registros básicos por lote en papel' },
            { value: 3, label: 'Trazabilidad digital por lote' },
            { value: 4, label: 'Trazabilidad unitaria con QR/RFID' },
            { value: 5, label: 'Blockchain, transparencia total' }
          ]
        },
        {
          id: 't2',
          text: '¿Sus clientes pueden verificar el origen de sus productos?',
          options: [
            { value: 1, label: 'No, no hay información disponible' },
            { value: 2, label: 'Información básica si la solicitan' },
            { value: 3, label: 'Certificados digitales disponibles' },
            { value: 4, label: 'Código QR con información completa' },
            { value: 5, label: 'Plataforma de transparencia en tiempo real' }
          ]
        },
        {
          id: 't3',
          text: '¿Conoce en tiempo real sus niveles de inventario?',
          options: [
            { value: 1, label: 'Control visual, sin registros' },
            { value: 2, label: 'Inventarios manuales periódicos' },
            { value: 3, label: 'Sistema digital de inventarios' },
            { value: 4, label: 'Inventario en tiempo real automatizado' },
            { value: 5, label: 'Optimización predictiva de inventarios' }
          ]
        },
        {
          id: 't4',
          text: '¿Optimiza digitalmente sus rutas de distribución?',
          options: [
            { value: 1, label: 'Gestión manual sin planificación' },
            { value: 2, label: 'Planificación básica en papel' },
            { value: 3, label: 'Software de gestión logística' },
            { value: 4, label: 'Optimización de rutas con GPS' },
            { value: 5, label: 'Logística predictiva automatizada' }
          ]
        },
        {
          id: 't5',
          text: '¿Puede rastrear en tiempo real sus envíos?',
          options: [
            { value: 1, label: 'No, solo confirmo al entregar' },
            { value: 2, label: 'Llamadas telefónicas al conductor' },
            { value: 3, label: 'Reporte al finalizar el día' },
            { value: 4, label: 'GPS tracking en tiempo real' },
            { value: 5, label: 'Plataforma completa con alertas' }
          ]
        }
      ]
    },
    {
      id: 'comercial',
      name: 'Comercialización',
      icon: '💼',
      color: '#f59e0b',
      questions: [
        {
          id: 'c1',
          text: '¿Vende sus productos por canales digitales?',
          options: [
            { value: 1, label: 'Solo venta presencial/telefónica' },
            { value: 2, label: 'Email y WhatsApp básico' },
            { value: 3, label: 'Página web informativa' },
            { value: 4, label: 'E-commerce propio o plataformas' },
            { value: 5, label: 'Omnicanal con marketplace y IA' }
          ]
        },
        {
          id: 'c2',
          text: '¿Qué porcentaje de sus ventas es digital?',
          options: [
            { value: 1, label: '0% (todo presencial)' },
            { value: 2, label: '1-25% (algo digital)' },
            { value: 3, label: '26-50% (mitad digital)' },
            { value: 4, label: '51-75% (mayoría digital)' },
            { value: 5, label: '76-100% (casi todo digital)' }
          ]
        },
        {
          id: 'c3',
          text: '¿Gestiona digitalmente la relación con sus clientes?',
          options: [
            { value: 1, label: 'No gestiono relación con clientes' },
            { value: 2, label: 'Contactos en agenda/Excel' },
            { value: 3, label: 'CRM básico' },
            { value: 4, label: 'CRM integrado con ventas' },
            { value: 5, label: 'CRM con IA y personalización' }
          ]
        },
        {
          id: 'c4',
          text: '¿Monitorea digitalmente precios y tendencias de mercado?',
          options: [
            { value: 1, label: 'No monitoreo el mercado' },
            { value: 2, label: 'Consulta ocasional de precios' },
            { value: 3, label: 'Monitoreo regular manual' },
            { value: 4, label: 'Plataformas con alertas de precios' },
            { value: 5, label: 'IA predictiva de mercados' }
          ]
        },
        {
          id: 'c5',
          text: '¿Conoce las preferencias y historial de sus clientes?',
          options: [
            { value: 1, label: 'No tengo registro de clientes' },
            { value: 2, label: 'Memoria personal básica' },
            { value: 3, label: 'Base de datos de clientes' },
            { value: 4, label: 'Historial completo digitalizado' },
            { value: 5, label: 'Análisis predictivo de comportamiento' }
          ]
        }
      ]
    },
    {
      id: 'finanzas',
      name: 'Gestión Financiera',
      icon: '💰',
      color: '#ef4444',
      questions: [
        {
          id: 'f1',
          text: '¿Utiliza software contable especializado?',
          options: [
            { value: 1, label: 'Registros manuales en papel' },
            { value: 2, label: 'Excel básico' },
            { value: 3, label: 'Software contable estándar' },
            { value: 4, label: 'ERP integrado' },
            { value: 5, label: 'Finanzas predictivas con IA' }
          ]
        },
        {
          id: 'f2',
          text: '¿Puede acceder a información financiera en tiempo real?',
          options: [
            { value: 1, label: 'No, solo revisiones mensuales' },
            { value: 2, label: 'Reportes semanales manuales' },
            { value: 3, label: 'Reportes diarios digitales' },
            { value: 4, label: 'Dashboard financiero en tiempo real' },
            { value: 5, label: 'Analítica avanzada con alertas' }
          ]
        },
        {
          id: 'f3',
          text: '¿Gestiona digitalmente planillas y asistencia de personal?',
          options: [
            { value: 1, label: 'Control manual de asistencia' },
            { value: 2, label: 'Planillas básicas en Excel' },
            { value: 3, label: 'Software de RRHH básico' },
            { value: 4, label: 'Sistema integrado con biometría' },
            { value: 5, label: 'Plataforma con análisis de productividad' }
          ]
        },
        {
          id: 'f4',
          text: '¿Utiliza herramientas digitales para planificar su negocio?',
          options: [
            { value: 1, label: 'No tengo planificación formal' },
            { value: 2, label: 'Presupuestos básicos en papel' },
            { value: 3, label: 'Planificación digital estructurada' },
            { value: 4, label: 'Modelos financieros dinámicos' },
            { value: 5, label: 'Planificación predictiva con escenarios' }
          ]
        },
        {
          id: 'f5',
          text: '¿Emite facturas electrónicas?',
          options: [
            { value: 1, label: 'No, solo facturas en papel' },
            { value: 2, label: 'Algunas facturas digitales' },
            { value: 3, label: 'Mayoría son electrónicas' },
            { value: 4, label: '100% facturación electrónica' },
            { value: 5, label: 'Facturación automática integrada' }
          ]
        }
      ]
    },
    {
      id: 'cultura',
      name: 'Cultura Digital',
      icon: '👥',
      color: '#ec4899',
      questions: [
        {
          id: 'cu1',
          text: '¿Su equipo usa herramientas digitales con facilidad?',
          options: [
            { value: 1, label: 'Resistencia al cambio, sin habilidades' },
            { value: 2, label: 'Uso muy básico de tecnología' },
            { value: 3, label: 'Manejo de software específico' },
            { value: 4, label: 'Adopción proactiva de tecnología' },
            { value: 5, label: 'Innovación continua, mentalidad digital' }
          ]
        },
        {
          id: 'cu2',
          text: '¿Qué porcentaje de empleados tiene smartphone?',
          options: [
            { value: 1, label: '0-20%' },
            { value: 2, label: '21-40%' },
            { value: 3, label: '41-60%' },
            { value: 4, label: '61-80%' },
            { value: 5, label: '81-100%' }
          ]
        },
        {
          id: 'cu3',
          text: '¿Capacita regularmente a su equipo en tecnología?',
          options: [
            { value: 1, label: 'No hay capacitaciones' },
            { value: 2, label: 'Capacitación ocasional básica' },
            { value: 3, label: 'Programa anual de capacitación' },
            { value: 4, label: 'Capacitación continua planificada' },
            { value: 5, label: 'Cultura de aprendizaje permanente' }
          ]
        },
        {
          id: 'cu4',
          text: '¿La gerencia promueve activamente la digitalización?',
          options: [
            { value: 1, label: 'Líderes reacios a tecnología' },
            { value: 2, label: 'Conciencia pero sin acción' },
            { value: 3, label: 'Apoyo a iniciativas digitales' },
            { value: 4, label: 'Líderes impulsan transformación' },
            { value: 5, label: 'Liderazgo visionario en innovación' }
          ]
        },
        {
          id: 'cu5',
          text: '¿Qué % de ingresos invierte en tecnología anualmente?',
          options: [
            { value: 1, label: '0% (sin inversión)' },
            { value: 2, label: '0.5-1% (muy poco)' },
            { value: 3, label: '2-3% (moderado)' },
            { value: 4, label: '4-5% (significativo)' },
            { value: 5, label: '6%+ (innovación prioridad)' }
          ]
        }
      ]
    }
  ];

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const calculateDimensionScore = (dimension) => {
    const questionIds = dimension.questions.map(q => q.id);
    const scores = questionIds.map(id => responses[id] || 0);
    return scores.reduce((a, b) => a + b, 0);
  };

  const calculateTotalScore = () => {
    return dimensions.reduce((total, dim) => total + calculateDimensionScore(dim), 0);
  };

  const getMaxScore = () => dimensions.length * 5 * 5; // 5 dimensiones * 5 preguntas * 5 puntos máx

  const getDimensionLevel = (score) => {
    if (score <= 5) return { level: 1, label: 'Análogo', color: '#ef4444' };
    if (score <= 10) return { level: 2, label: 'Básico', color: '#f59e0b' };
    if (score <= 15) return { level: 3, label: 'Establecido', color: '#eab308' };
    if (score <= 20) return { level: 4, label: 'Avanzado', color: '#3b82f6' };
    return { level: 5, label: 'Líder', color: '#10b981' };
  };

  const getOverallLevel = (totalScore) => {
    if (totalScore <= 30) return {
      level: 'Etapa Análoga',
      color: '#ef4444',
      icon: '🔴',
      description: 'Empresa tradicional con procesos manuales',
      priority: 'URGENTE: Iniciar transformación digital',
      actions: ['Digitalizar procesos básicos', 'Capacitar equipo', 'Implementar software esencial'],
      timeframe: '18-24 meses al nivel 3'
    };
    if (totalScore <= 60) return {
      level: 'Inicio Digital',
      color: '#f59e0b',
      icon: '🟡',
      description: 'Adopción básica, herramientas aisladas',
      priority: 'Consolidar y estructurar sistemas',
      actions: ['Integrar sistemas existentes', 'Estandarizar procesos', 'Expandir capacitación'],
      timeframe: '12-18 meses al nivel 3'
    };
    if (totalScore <= 90) return {
      level: 'Digital Establecido',
      color: '#eab308',
      icon: '🟠',
      description: 'Procesos digitalizados funcionando',
      priority: 'Optimizar y automatizar',
      actions: ['Implementar analítica avanzada', 'Automatizar procesos', 'Explorar IoT'],
      timeframe: '12 meses al nivel 4'
    };
    if (totalScore <= 120) return {
      level: 'Digital Avanzado',
      color: '#3b82f6',
      icon: '🔵',
      description: 'Líder en adopción tecnológica',
      priority: 'Innovación disruptiva',
      actions: ['Implementar IA', 'Agricultura de precisión', 'Blockchain'],
      timeframe: 'Innovación continua'
    };
    return {
      level: 'Líder Digital',
      color: '#10b981',
      icon: '🟢',
      description: 'Referente del sector',
      priority: 'Mantener ventaja competitiva',
      actions: ['Explorar tecnologías emergentes', 'Mentoría a otros', 'Innovación radical'],
      timeframe: 'Liderazgo sostenido'
    };
  };

  const isStepComplete = () => {
    // Check if all questions in the current dimension are answered
    const currentDimension = dimensions[currentStep];
    return currentDimension.questions.every(q => responses[q.id] !== undefined);
  };

  const progressPercentage = () => {
    const totalQuestions = dimensions.reduce((sum, dim) => sum + dim.questions.length, 0);
    const answeredQuestions = Object.keys(responses).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  const getRadarData = () => {
    return dimensions.map(dim => ({
      dimension: dim.name.split(' ')[0], // Use first word for compact radar label
      score: calculateDimensionScore(dim),
      fullMark: 25 // Max score per dimension
    }));
  };

  const getBarData = () => {
    return dimensions.map(dim => {
      const score = calculateDimensionScore(dim);
      const level = getDimensionLevel(score);
      return {
        name: dim.icon + ' ' + dim.name,
        score: score,
        nivel: level.label,
        color: level.color
      };
    });
  };

  const resetEvaluation = () => {
    setResponses({});
    setCurrentStep(0);
    setShowResults(false);
    setCompanyName('');
  };

  const goToNextStep = () => {
    if (currentStep < dimensions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === dimensions.length - 1) {
      // Last step, show results
      setShowResults(true);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults) {
    const totalScore = calculateTotalScore();
    const overallLevel = getOverallLevel(totalScore);
    const radarData = getRadarData();
    const barData = getBarData();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Resultados de Madurez Digital
                </h1>
                <p className="text-xl text-gray-600">{companyName}</p>
              </div>
              <button
                onClick={resetEvaluation}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <RefreshCw size={20} />
                Nueva Evaluación
              </button>
            </div>
            
            {/* Score General */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-lg mb-2">Puntaje Total</p>
                  <p className="text-6xl font-bold" style={{ color: overallLevel.color }}>
                    {totalScore}<span className="text-3xl text-gray-500">/{getMaxScore()}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-8xl mb-2">{overallLevel.icon}</p>
                  <p className="text-2xl font-bold" style={{ color: overallLevel.color }}>
                    {overallLevel.level}
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-gray-700 text-lg">{overallLevel.description}</p>
                <p className="text-gray-600 mt-2">
                  <strong>Tiempo estimado:</strong> {overallLevel.timeframe}
                </p>
              </div>
            </div>

            {/* Priority Alert */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 mt-1" size={24} />
                <div>
                  <p className="font-bold text-yellow-800 text-lg">{overallLevel.priority}</p>
                  <ul className="mt-2 space-y-1">
                    {overallLevel.actions.map((action, idx) => (
                      <li key={idx} className="text-yellow-700 flex items-center">
                        <CheckCircle size={16} className="mr-2" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Radar Chart */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil de Madurez</h2>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="dimension" />
                  <PolarRadiusAxis angle={90} domain={[0, 25]} />
                  <Radar
                    name="Su empresa"
                    dataKey="score"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Puntaje por Dimensión</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 25]} />
                  <YAxis type="category" dataKey="name" width={150} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#10b981" radius={[0, 8, 8, 0]}>
                    {barData.map((entry, index) => (
                      <Bar key={`bar-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Dimension Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Análisis Detallado por Dimensión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dim) => {
                const score = calculateDimensionScore(dim);
                const level = getDimensionLevel(score);
                return (
                  <div key={dim.id} className="border-2 rounded-xl p-6" style={{ borderColor: dim.color }}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{dim.icon}</span>
                      <span className="text-3xl font-bold" style={{ color: dim.color }}>
                        {score}/25
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{dim.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full transition-all"
                          style={{
                            width: `${(score / 25) * 100}%`,
                            backgroundColor: level.color
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: level.color }}>
                      Nivel {level.level}: {level.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <TrendingUp className="text-green-600" size={32} />
              Próximos Pasos Recomendados
            </h2>
            <div className="space-y-4">
              {dimensions
                .map(dim => ({
                  ...dim,
                  score: calculateDimensionScore(dim)
                }))
                .sort((a, b) => a.score - b.score)
                .slice(0, 3)
                .map((dim, idx) => {
                  const level = getDimensionLevel(dim.score);
                  return (
                    <div key={dim.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">
                          {dim.icon} Mejorar {dim.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Actualmente en <strong>{level.label}</strong> con {dim.score}/25 puntos
                        </p>
                        <p className="text-sm text-gray-500">
                          Esta es una de sus áreas con mayor oportunidad de mejora. Priorice acciones aquí para obtener resultados rápidos.
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all shadow-lg"
            >
              <Download size={24} />
              Descargar Reporte PDF
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              Presione Ctrl+P (Windows) o Cmd+P (Mac) para guardar como PDF
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Evaluation Form
  const currentDimension = dimensions[currentStep];
  const progress = progressPercentage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🌾 Evaluación de Madurez Digital
              </h1>
              <p className="text-lg text-gray-600">Sector Agropecuario</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Progreso General</p>
              <p className="text-3xl font-bold text-green-600">{Math.round(progress)}%</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Company Name Input (Only on first step if not yet answered) */}
          {currentStep === 0 && Object.keys(responses).length === 0 && (
            <div className="mb-6 p-6 bg-blue-50 rounded-xl">
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Nombre de su empresa:
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Ej: Agrícola San José"
                className="w-full px-4 py-3 text-lg border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {/* Dimension Progress */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-4xl">{currentDimension.icon}</span>
              {currentDimension.name}
            </h2>
            <span className="text-lg font-semibold text-gray-600">
              Dimensión {currentStep + 1} de {dimensions.length}
            </span>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {currentDimension.questions.map((question, qIdx) => {
            const isAnswered = responses[question.id] !== undefined;
            return (
              <div
                key={question.id}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all ${
                  isAnswered ? 'border-2 border-green-500' : 'border-2 border-transparent'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {qIdx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-800">{question.text}</p>
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleResponse(question.id, option.value)}
                      className={`
                        p-4 rounded-lg text-left transition-all duration-200 border-2
                        ${
                          responses[question.id] === option.value
                            ? 'bg-green-100 border-green-600 text-green-800 font-bold shadow-md'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <span className="font-mono text-sm mr-2" style={{ color: currentDimension.color }}>
                        {option.value}
                      </span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between p-4 bg-white rounded-xl shadow-lg">
          <button
            onClick={goToPrevStep}
            disabled={currentStep === 0}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all
              ${
                currentStep === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }
            `}
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <button
            onClick={goToNextStep}
            disabled={!isStepComplete() || (currentStep === 0 && companyName.trim() === '')}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all
              ${
                !isStepComplete() || (currentStep === 0 && companyName.trim() === '')
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : currentStep < dimensions.length - 1
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }
            `}
          >
            {currentStep < dimensions.length - 1 ? (
              <>
                Siguiente
                <ChevronRight size={20} />
              </>
            ) : (
              <>
                Ver Resultados
                <Award size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MadurezDigitalAgro;