import { Calendar } from 'lucide-react';

const Schedule = () => {
    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-indigo-500" />
                    <h2 className="text-3xl font-bold">Schedule a Call</h2>
                </div>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Interested in working together? Let's schedule a 30-minute call to discuss your project needs and how I can help.
                </p>
                <a
                    href="https://calendly.com/l-mesguen/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold duration-300"
                >
                    Schedule a 30-min Call
                </a>
            </div>
        </section>
    );
};

export default Schedule;